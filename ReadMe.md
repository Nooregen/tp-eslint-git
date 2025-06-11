Exercice 2 : 
2) on peut remarquer qu'il y a une erreur d'indentation, un ";" manquant, une utilisation de console.log et il manque l'espacement sur les coté du " 10". 
   3) voici le code corrigé :
        const x = 10;
        console.log(x);
        
        function test() {
            console.log('test');
        }
        
        test();
Exercice 3 :
   3) pas d'erreur lors du commit



Type d'erreur courante pendant le TP.


   PS : j'ai essayé de faire ce que j'ai pu mais cela ne fonctionnait pas : 



➜  tp-eslint-git git:(main) ✗ npm run lint           

> tp-eslint-git@1.0.0 lint
> eslint .


Oops! Something went wrong! :(

ESLint: 9.28.0

TypeError: Plugin "" not found.
    at findPluginConfig (/Users/vince/Desktop/Cours/Outils/tp-eslint-git/node_modules/@eslint/config-helpers/dist/cjs/index.cjs:251:9)
    at /Users/vince/Desktop/Cours/Outils/tp-eslint-git/node_modules/@eslint/config-helpers/dist/cjs/index.cjs:415:25
    at Array.map (<anonymous>)
    at processExtends (/Users/vince/Desktop/Cours/Outils/tp-eslint-git/node_modules/@eslint/config-helpers/dist/cjs/index.cjs:413:36)
    at /Users/vince/Desktop/Cours/Outils/tp-eslint-git/node_modules/@eslint/config-helpers/dist/cjs/index.cjs:485:38
    at Array.flatMap (<anonymous>)
    at processConfigList (/Users/vince/Desktop/Cours/Outils/tp-eslint-git/node_modules/@eslint/config-helpers/dist/cjs/index.cjs:485:20)
    at defineConfig (/Users/vince/Desktop/Cours/Outils/tp-eslint-git/node_modules/@eslint/config-helpers/dist/cjs/index.cjs:520:9)
    at file:///Users/vince/Desktop/Cours/Outils/tp-eslint-git/eslint.config.mjs?mtime=1749653220737:4:16
    at ModuleJob.run (node:internal/modules/esm/module_job:218:25)

