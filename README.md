# MA Tools Template Plugin
A starting point for your grandMA3 plugin project written in TypeScript and build on MA Tools.

## build on
<div align="center">
		<a style="text-decoration:inherit; color: inherit; cursor: pointer;" href="https://typescripttolua.github.io" target="_blank">
    <img src="https://raw.githubusercontent.com/TypeScriptToLua/TypeScriptToLua/master/logo-hq.png?raw=true" alt="TypeScriptToLua" width="256" />
    <h1 style="text-decoration:inherit; color: inherit; cursor: pointer;" href="https://typescripttolua.github.io" target="_blank">
        <p>TypeScriptToLua</p>
    </h1>
		</a>
</div>

### as well as:

- [**grandMA3-types**](https://github.com/LightYourWay/grandMA3-types) - TypeScript definitions for the grandMA3 Lua API
- [**grandMA3-tstl-plugin**](https://github.com/LightYourWay/grandMA3-tstl-plugin) - a TypeScriptToLua plugin that allows for direct export to grandMA3 compatible Lua files
- [**ma-tools**](https://github.com/LightYourWay/ma-tools) - a feature rich utility for MA3/2 written in Typescript to allow operators to take advantage of LUA easily.

## install
```bash
git clone https://github.com/LightYourWay/ma-tools-template-plugin.git && \
cd ma-tools-template-plugin
```

## build
```bash
npm run build 
```

## import into grandMA3
As long as the plugin development folder is located in the `lib_plugins` folder of grandMA3 the plugin can directly be imported like so: [![How to import the plugin](https://i.imgur.com/1zJvKD5.png)](https://i.imgur.com/1zJvKD5.png)

### :tada: you successfully loaded a plugin based on MA Tools into the grandMA3 :sparkles: