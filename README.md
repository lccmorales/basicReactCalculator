# basicReactCalculator
Calculadora Básica

Creación de calculadora básica para practicar React

Este proyecto cuenta con dos ramas principales (branches)
- main
- develop

## Instalaciones Necesarias
- Google Chrome o Firefox
- Visual Studio Code o el editor de tu preferencia
- Git
- Node

## Instalaciones Opcionales
- React Developer Tools (Extensión)
- Redux Devtools (Extensión)


# Configurar GIT
`Nota importante: realizar este proceso solamente si es su primer proyecto GIT.`

- Para configurar su usuario en las variables globales de Git y de ese modo se utilice a partir de ese momento en cualquier otro proyecto Git.
Ejecutar los siguientes comandos en consola:
```bash
git config --global user.mail "[correo electrónico]"
```
```bash
git config --global user.name "[nombre_usuario]"
```

- Si desea automatizar el comando `Push` para cuando necesite subir los cambios a la misma rama pero en Origin (servidor Git)

Ejemplo si se encuentra en la rama `develop`:
```
git push origin develop
```
Este comando va a subir de la rama `develop local` a `develop servidor`

Entonces solo necesita escribir
```
git push
```
Para lograr esta simplificación ejecutar en consola el siguiente comando:
```bash
git config --global push.default current
```
Si lo que se desea es enviar la rama actual a otra diferente en ese caso si es necesario especificar las ramas

# Configurar repositorio
## Clonar Repositorio

Para descargar el repositorio ejecutar los siguientes comandos:
```bash
cd /home/jmorales/SourseCode
```
```bash
git clone https://github.com/lccmorales/basicProjectDashboard.git
```
```bash
cd basicProjectDashboard
```
Nota: Reemplazar `/home/jmorales/SourseCode` por el directorio donde desee clonar el repositorio
## Configurar Ramas
Ejecutar el comando:
```bash
git branch
* main
```

Si el resultado es igual al anterior, significa que solo existe la rama principal `main`, necesita crear localmente la otra rama, pero primero descargaremos el código de esta rama con el comando: 
```bash
git pull
```

```
Seguimos con la rama `develop` que es la rama donde vamos a trabajar principalmente
```bash
git checkout develop
Cambiado a rama 'develop'
```


## Uso básico de  GIT

Para aprender los comandos básicos de Git puede consultar el siguiente enlace:
https://gist.github.com/dasdo/9ff71c5c0efa037441b6

- - -
# React
## Instalar modulos React

```bash
yarn
```

## Ejecutar en modo desarrollo
```bash
yarn dev
```