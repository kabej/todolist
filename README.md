# TodoList

## Initialisation de l'env de dev

Après avoir cloner le repo (Julien tu peux écraser ce qu'on a fait hier soir):

#### Installation de gulp en global
```sh
sudo npm install -g gulp
```

#### Installation de bower en global
```sh
sudo npm install -g bower
```

#### Installation des modules node (pour les tâches)
```sh
npm install
```

#### Installation des dépendances web (angular dans notre cas)
```sh
bower install
```
## Tâches Gulp

#### Lance une analyse de code :

```sh
gulp analyse
```

#### Lancer les tests unitaires :

```sh
gulp test
```

#### Lancer l'application (http://localhost:8080) :

```sh
gulp
```

Les tests sont dans /src/test/todo.spec.js et se lance dans un navigateur sans interface : PhantomJS

## Enjoy, il vous reste du taf!!

Je vous laisse voir pour rajouter des tâches pour finaliser le pipeline.
Vous pouvez modifier la conf pour générer des fichiers de reporting TU lisible par jenkins.
Faites vous aider!

:)
