# pull official base image
FROM python:3.9.5-alpine


RUN cp /etc/localtime /etc/localtime.back && rm -rf /etc/localtime

ENV TZ=America/Mexico_City

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt-get update && apt-get install -y cron

RUN crontab /etc/crontab

RUN touch /var/log/cron.log

RUN mkdir /code

# set work directory
WORKDIR /code

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1


ENV LANG es_MX.UTF-8

ENV LANGUAGE es_MX.UTF-8

ENV LC_ALL es_MX.UTF-8

# install dependencies
RUN pip install --upgrade pip
COPY ./app/requirements.txt ./code/requirements.txt
RUN pip install -r /code/requirements.txt
COPY ./app/entrypoint.sh /code/entrypoint.sh
# copy project
COPY . .

# run entrypoint.sh
ENTRYPOINT ["sh entrypoint.sh"]