## Simple MS Teams Auth Sample


### Based off this [blog](https://techcommunity.microsoft.com/t5/Microsoft-Teams-Blog/Authentication-SSO-and-Microsoft-Graph-in-Microsoft-Teams-Tabs/ba-p/125366)

## Building

```
> ngrok http 8080
> npm i
```

Update the following things and files:

**manifest.json:**

```
* id
* packageName
* staticTabs > contentUrl 			#update w/ your ngrok endpoint
* validDomains  					#update w/ your ngrok endpoint
```
**tab-auth/simple-start.html:**

```
* queryParams > client_id
```
**tab-auth/refresh-token.html:**

```
* queryParams > client_id
```

## Running

```
> npm start
```

