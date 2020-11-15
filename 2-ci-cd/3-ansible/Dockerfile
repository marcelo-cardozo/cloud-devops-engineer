FROM ubuntu:focal

USER root

RUN apt-get update
RUN apt-get install -y ansible
RUN apt-get install -y systemd

COPY nginx_ansible /nginx_ansible
WORKDIR /nginx_ansible


RUN ansible-playbook -i inventory main.yaml
ENTRYPOINT ["nginx", "-g", "daemon off;"]