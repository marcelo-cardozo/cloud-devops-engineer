FROM python:3.7.3-stretch

WORKDIR /app

COPY . app/web.py /app/

RUN pip install --upgrade pip &&\
    pip install --trusted-host pypi.python.org -r requirements

# Expose port 80
EXPOSE 80

# Run app.py at container launch
CMD ["python", "web.py"]