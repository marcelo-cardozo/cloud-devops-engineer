FROM jenkins/jenkins:lts


# default user is "jenkins", to install new packages use the "root" user
USER root

RUN apt-get update
RUN apt-get install -y software-properties-common
RUN echo "deb http://ppa.launchpad.net/ansible/ansible/ubuntu trusty main">> /etc/apt/sources.list
RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 93C4A3FD7BB9C367
RUN apt-get update
RUN apt-get install -y ansible
RUN ansible-galaxy collection install community.aws

RUN apt-get install -y python-pip
RUN pip install boto

USER jenkins