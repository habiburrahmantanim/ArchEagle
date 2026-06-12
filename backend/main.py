from ast import Import

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import aiosmtplib
from email.message import EmailMessage
from dotenv import load_dotenv
import os


load_dotenv()

app = FastAPI()

# Load CORS origins from environment or use default for local development
CORS_ORIGINS = os.getenv("CORS_ORIGINS", "http://localhost:3000").split(",")
CORS_ORIGINS = [origin.strip() for origin in CORS_ORIGINS]

app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


EMAIL_USERNAME = os.getenv("EMAIL_USERNAME")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")
COMPANY_EMAIL = os.getenv("COMPANY_EMAIL")

class ContactForm(BaseModel):
    first_name: str
    last_name: str
    email: str
    phone: str
    service: str
    
    
@app.post("/contact")
async def contact(form: ContactForm):
    message = EmailMessage()
    message["From"] = form.email
    message["To"] = COMPANY_EMAIL
    message["Subject"] = f"New Contact Form Submission from {form.first_name} {form.last_name}"
    message.set_content(f"""
    First Name: {form.first_name}
    Last Name: {form.last_name}
    Email: {form.email}
    Phone: {form.phone}
    Service Interested In: {form.service}
    """)
    try:
        await aiosmtplib.send(
            message,
            hostname="smtp.gmail.com",
            port=587,
            start_tls=True,
            username=EMAIL_USERNAME,
            password=EMAIL_PASSWORD,
        )
        return {"message": "Contact form submitted successfully"}
    except Exception as e:
        print(f"Error sending email: {e}")
        return {"message": "Failed to submit contact form"}, 500