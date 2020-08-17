# Yammy

This library is a library used to manage yaml split.

## Extended syntax
This library uses `$dir` to manage split yaml files.

`$dir` is a property that converts yml under the target directory to object according to the directory structure.

`file structure`
- A
    - B
        - C.yml

`C.yml`
```yaml
example: Example
```

`output $dir`
```javascript
{
  A: {
    B: {
      C: {
        example: 'Example'  
      }  
    }  
  }
}
```


## Cli options
```shell script
yammy <yaml> [options]
```
`command`

| name      | required | type   | description                       | 
| --------- | -------- | ------ | --------------------------------- | 
| yaml      | true     | String | Path of root yaml file            | 


`options`

| name      | alias | required | type   | description                       | 
| --------- | ----- | -------- | ------ | --------------------------------- | 
| output    | o     | true     | String | Output Path of combined yaml file |

## Get started
### node
#### install
`yarn`
```shell script
yarn add -D yammy
```
`npm`
```shell script
npm install -D yammy
```

#### usage
`cli`
```shell script
yammy ./main.yml -o ./merged.yml  
```

### docker

## Issue
If you find a problem, please report it on Issue, and we will fix it.

## Contributes
If you would like to cooperate with the development, please create a PR and participate.

## License
MIT License
