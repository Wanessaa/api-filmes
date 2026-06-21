# Infraestrutura Vagrant com Monitoramento

## Pré-requisitos

- [Vagrant](https://www.vagrantup.com/downloads) instalado
- [VirtualBox](https://www.virtualbox.org/wiki/Downloads) instalado
- [Ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html) instalado na VM1

## Executar a infraestrutura

1. Inicie as VMs:
```bash
   vagrant up
```

2. Acesse a VM1:
```bash
   vagrant ssh vm1
```

3. Execute o playbook de monitoramento:
```bash
   cd ~/ansible
   ansible-playbook -i hosts ../vagrant/data/configurar-monitoramento.yml
```

## Visualizar dados do Netdata

O Netdata expõe um dashboard web na porta **19999**.

Acesse no navegador do seu computador:

http://192.168.56.11:19999
### O que você verá no dashboard

- **CPU** → uso em tempo real, médias e alertas
- **Memória** → RAM utilizada e disponível
- **Disco** → leitura e escrita
- **Rede** → tráfego de entrada e saída
- **Processos** → processos em execução

## Testar alerta de CPU

1. Acesse a VM2:
```bash
   vagrant ssh vm2
```

2. Instale o stress-ng (se não estiver instalado):
```bash
   sudo apt-get install -y stress-ng
```

3. Execute o stress para simular 80% de CPU:
```bash
   stress-ng --cpu 2 --cpu-load 80 --timeout 60s
```

4. Acompanhe o alerta no dashboard:

http://192.168.56.11:19999

5. O alerta será enviado para: `wnessasantana@gmail.com`

## Parar as VMs

```bash
vagrant halt
```

## Destruir as VMs

```bash
vagrant destroy
```