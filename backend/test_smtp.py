from dotenv import load_dotenv
import os
import asyncio
from email.message import EmailMessage
import aiosmtplib

load_dotenv()

EMAIL_USERNAME = os.getenv("EMAIL_USERNAME")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")
COMPANY_EMAIL = os.getenv("COMPANY_EMAIL")

async def test_smtp():
    print("Using EMAIL_USERNAME:", EMAIL_USERNAME)
    print("Using COMPANY_EMAIL:", COMPANY_EMAIL)

    msg = EmailMessage()
    msg["From"] = EMAIL_USERNAME
    msg["To"] = COMPANY_EMAIL or EMAIL_USERNAME
    msg["Subject"] = "SMTP test from test_smtp.py"
    msg.set_content("This is a test message to verify SMTP credentials.")

    try:
        await aiosmtplib.send(
            msg,
            hostname="smtp.gmail.com",
            port=587,
            start_tls=True,
            username=EMAIL_USERNAME,
            password=EMAIL_PASSWORD,
        )
        print("SMTP send: OK")
    except Exception as e:
        print("SMTP send error:", e)

if __name__ == "__main__":
    asyncio.run(test_smtp())
