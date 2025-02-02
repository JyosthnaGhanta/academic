from flask import Flask, request, jsonify
from flask_cors import CORS
import PyPDF2
from transformers import pipeline
import os
from werkzeug.utils import secure_filename
import logging
import io

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app)

# Configuration
ALLOWED_EXTENSIONS = {"pdf"}

# Initialize the summarizer
try:
    summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
    logger.info("Summarization model loaded successfully")
except Exception as e:
    logger.error(f"Failed to load summarization model: {str(e)}")
    raise

def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS

def summarize_text(text):
    try:
        text = text.strip()
        if not text:
            raise ValueError("Empty text provided")

        # Split text into smaller chunks if needed
        max_chunk_length = 1024
        chunks = [text[i:i + max_chunk_length] for i in range(0, len(text), max_chunk_length)]
        
        summaries = []
        for chunk in chunks:
            if chunk.strip():
                summary = summarizer(chunk, max_length=130, min_length=30, do_sample=False)
                summaries.append(summary[0]['summary_text'])

        return " ".join(summaries)
    except Exception as e:
        logger.error(f"Summarization error: {str(e)}")
        raise

@app.route('/summarize-pdf', methods=['POST'])
def summarize_pdf():
    try:
        if 'file' not in request.files:
            return jsonify({"error": "No file uploaded"}), 400

        file = request.files['file']
        
        if file.filename == '':
            return jsonify({"error": "No selected file"}), 400

        if not allowed_file(file.filename):
            return jsonify({"error": "Invalid file type. Only PDF files are allowed"}), 400

        try:
            # Read PDF directly from the file stream
            pdf_reader = PyPDF2.PdfReader(io.BytesIO(file.read()))
            text = ""
            for page in pdf_reader.pages:
                text += page.extract_text() or ""

            if not text.strip():
                raise ValueError("No text could be extracted from the PDF")

            summary = summarize_text(text)
            return jsonify({"summary": summary})

        except Exception as e:
            logger.error(f"PDF processing error: {str(e)}")
            return jsonify({"error": str(e)}), 500

    except Exception as e:
        logger.error(f"Request handling error: {str(e)}")
        return jsonify({"error": "Failed to process PDF file"}), 500

@app.route('/summarize-text', methods=['POST'])
def summarize_text_endpoint():
    try:
        data = request.get_json()
        if not data or 'text' not in data:
            return jsonify({"error": "No text provided"}), 400

        summary = summarize_text(data['text'])
        return jsonify({"summary": summary})

    except Exception as e:
        logger.error(f"Text summarization error: {str(e)}")
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=3000, debug=True)