# TodoList

Après avoir cloner le repo (Julien tu peux écraser ce qu'on a fait hier soir):

* sudo npm install -g gulp // Installation de gulp en global
* sudo npm install -g bower // Installation de bower en global
* npm install // Installation des modules node (pour les tâches)
* bower install // Installation des dépendances web (angular dans notre cas)

### Lance une analyse de code :

```sh
gulp analyse
```

### Lancer les tests unitaires :

```sh
gulp test
```

### Lancer l'application (http://localhost:8080) :

```sh
gulp
```

Les tests sont dans /src/test/todo.spec.js et se lance dans un navigateur sans interface : PhantomJS

### Enjoy, il vous reste du taf!!

Je vous laisse voir pour rajouter des tâches pour finaliser le pipeline.
Vous pouvez modifier la conf pour générer des fichiers de reporting TU lisible par jenkins.
Faites vous aider!

:)
