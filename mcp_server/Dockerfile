# Create base image with dependencies installed
FROM python:3.10-slim

WORKDIR /var/mcp/

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY main.py .

CMD [ "fastmcp", "run", "main.py", "--host", "0.0.0.0", "--port", "3001" ]
