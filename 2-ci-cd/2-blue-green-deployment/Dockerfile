FROM jenkins/jenkins:lts


# default user is "jenkins", to install new packages use the "root" user
USER root

RUN apt-get update
RUN apt-get install -y python3-pip
RUN pip3 install boto
RUN apt-get install -y ansible

USER jenkins