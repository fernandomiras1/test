
### Instalar commitlint

Fuente: https://www.npmjs.com/package/@commitlint/cli

```sh
npm install --save-dev @commitlint/cli @commitlint/config-angular
echo "module.exports = {extends: ['@commitlint/config-angular']};" > commitlint.config.js
```

Segundo instalamos husky
Fuente: https://www.npmjs.com/package/husky

```sh
npm install husky --save-dev
```


### Git commit

> Para realizar un commit es recomendable asociar un tipo de contenido a ser subido, el mismo nos ayudará a dar más trazabilidad en el changelog. 

El funcionamiento es bastante sencillo, sólo tenemos que agregarle al commit tradicional algunas de las tipologias (feat, fix...) como parte del prefix del mensaje. 

Es recomendable que el primer commit que hagas sobre tu branch tenga el número de jira, es decir, en donde dice **jira short name-XXX** debería ser remplazado por el nombre corto de jira y el número asociado.
> Ej: 
  Tenemos el siguiente ticket: https://naranja.atlassian.net/browse/ZDS-1053
  el commit seria el siguiente:
```sh
git commit -m "fix: zds-1053 corregir los márgenes negativos"
```
#### Tipologías aceptadas:

* **build**: Cambios que afectan el sistema de compilación o las dependencias externas (ámbitos de ejemplo: trago, brócoli, npm)
* **ci**: Cambios en nuestros archivos de configuración y scripts de CI (ámbitos de ejemplo: Circle, BrowserStack, SauceLabs)
* **docs**: Cambios en la doc
* **feat**: Una nueva funcionalidad
* **fix**: Un fix de un bug
* **perf**: Un cambio de código que mejora el rendimiento.
* **refactor**: Un cambio de código que no corrige un error ni agrega una característica
* **style**: Cambios que no afectan el significado del código (espacios en blanco, formato, puntos y comas que faltan, etc.)
* **test**: Agregar test faltantes o corregir test existentes
* **revert**: Un revert de un commit

### Ejemplos:

_fix:_

```sh
git commit -a -m "fix: <jira short name>-XXX se arregla el problema xxx"
```

_features:_

```sh
git commit -a -m "feat: <jira short name >-XXX se implementa xxx"
```

_documentación:_

```sh
git commit -a -m "docs: <jira short name >-XXX fixed up the docs a bit"
```
---
