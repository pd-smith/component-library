

# ComponentLibrary

## How to install NX globally
```
npm install -g nx
```

## How to add a component
```
nx g @nrwl/react:component my-component --project=components
```

## How to add a new react library
```
nx g @nrwl/react:lib components --importPath=@components --publishable=true
```

## How to add a new node library
```
nx g @nrwl/node:lib components --importPath=@components --publishable=true
```

## How I added storybook
```
nx g @nrwl/react:storybook-configuration components
```

## How to run storybook
```
nx run components:storybook
```

# Learnings so far

* Pretty cool, but deep learning curve
* Not having the ability to do something similar to 'components' in a node library kind of stinks
* would need some abstraction scripts to orcestrate things like adding across repos for new components
* stiff directory conventions is disappointing, but not a deal breaker
* vs code plugin is pretty cool
