# save this as app.py
from operator import ge
import os
from urllib import response
import requests
from flask import Flask, request
from dotenv import load_dotenv

load_dotenv(dotenv_path=("./.env.local"))

# print(os.environ.get("UNSPLASH_ACCESS_KEY", ""))
UNSPLASH_URL = 'https://api.unsplash.com/photos/random'
UNSPLASH_ACCESS_KEY = os.environ.get("UNSPLASH_ACCESS_KEY", "")
DEBUG = bool(os.environ.get("DEBUG", True))

if not UNSPLASH_ACCESS_KEY:
    raise EnvironmentError(
        "Please create .env.local file and insert there UNSPLASH_ACCESS_KEY")


app = Flask(__name__)  # main
app.config["DEBUG"] = DEBUG


# def hello():
#     return "Hello, World!"
# app.route("/")(hello)

@app.route("/")
def hello():
    return "Hello, World!"


@app.route("/new-image")
def new_image():
    word = request.args.get("query")

    headers = {
        "Accept-Version": "v1",
        "Authorization": "Client-ID " + UNSPLASH_ACCESS_KEY
    }
    params = {
        "query": word
    }
    response = requests.get(url=UNSPLASH_URL, headers=headers, params=params)

    data = (response.json())
    return data


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050)


# app.run(port=5000)
