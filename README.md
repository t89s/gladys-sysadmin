Sysadmin module for gladysproject
=======================


What is Gladys project
-------------

**Website :** [https://gladysproject.com](http://gladysproject.com) <br>
**Community :** [https://community.gladysproject.com/](https://community.gladysproject.com/)


The Module
-------------

This module add the possibility to Gladys to upgrade itself, by sending a system command to the OS.

Prerequisites
-------------

- [Gladys](http://gladysproject.com) ( tested with v3.7.1 )

 
Getting Started
---------------
#### Gladys parameters

Add followings parameters in gladys :

For my raspberry I use following parameters but you can change them :
```
UPGRADE_CMD=ssh -i /home/pi/.ssh/gladys_rsa pi@192.168.0.211 'sudo apt upgrade -y'
```

#### Install the module on gladys

Nom : sysadmin 
Version : 0.0.1 
URL git : https://github.com/totof68/gladys-sysadmin
slug : sysadmin


#### Restart Gladys

#### Sentences are automatically added by the hook as you can see in the brain :
In french language : Met à jour le serveur

