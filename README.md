# Discord-Auto-Server-Joiner
An automatic discord server joiner (needs the browser, so it is not that good).

## Invite Link Instructions

```js
const invs /* seperate invite links with new lines */ =
`
https://discord.gg/inv1
https://discord.gg/inv2
https://discord.gg/inv3
` // you get the gist
```

## Session ID Instructions

1. Go on the discord website: https://discord.com/channels/@me
2. Open the Developer Console (Ctrl + Shift + I) or (RightClick -> Inspect Element)
3. Go to the network tab
4. Join any server normally
5. Find that server invite in the network list, and click it
6. Click the payload tab
7. Right click the session ID string -> Copy Value

Example of a session ID: `1dd5472dfef4e6a4e07cc63be0888fb1`

## Recommendations

It's recommended to have phone number verified so the account doesn't get locked / disabled.
A recommended site to get a temp phone number: https://receive-sms-free.cc
