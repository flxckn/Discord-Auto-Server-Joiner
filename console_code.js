const delayBetweenJoin = 15 // this is in seconds, recommend minimum = 15
const sessionID = "INSERT_HERE"

const invs /* seperate invite links with new lines */ =
`
https://discord.gg/inv1
https://discord.gg/inv2
https://discord.gg/inv3
` // you get the gist

/*

its recommended to have phone number verified so the account doesn't get locked / disabled
recommended site to get a temp phone number: https://receive-sms-free.cc


How to get session ID

1. Go on the discord website: https://discord.com/channels/@me
2. Open the Developer Console (Ctrl + Shift + I) or (RightClick -> Inspect Element)
3. Go to the network tab
4. Join any server normally
5. Find that server invite in the network list, and click it
6. Click the payload tab
7. Right click the session ID string -> Copy Value

Example of a session ID: 1dd5472dfef4e6a4e07cc63be0888fb1
*/

// DO NOT EDIT THE REST

function promisifiedWait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const splitInvs = invs.split(/\r?\n/)
const token = (webpackChunkdiscord_app.push([[''], {}, e => { m = []; for (let c in e.c) m.push(e.c[c]) }]), m).find(m => m?.exports?.default?.getToken !== void 0).exports.default.getToken()

async function _run() {
  for (const inv of splitInvs) {
    const invReal = inv.replace("https://discord.gg/", "")
    if (invReal.length <= 1) continue

    try {
      const r = await fetch(`https://discord.com/api/v9/invites/${invReal}`, {
        "headers": {
          "authorization": token,
          "content-type": "application/json",

          // fake headers

          "accept": "*/*",
          "accept-language": "en-US,en;q=0.9",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-context-properties": "eyJsb2NhdGlvbiI6IkpvaW4gR3VpbGQiLCJsb2NhdGlvbl9ndWlsZF9pZCI6IjExMDkyMDk0NTcxNzY2MjEwODYiLCJsb2NhdGlvbl9jaGFubmVsX2lkIjoiMTExMjEwODM4MzM0OTI0ODEwMSIsImxvY2F0aW9uX2NoYW5uZWxfdHlwZSI6MH0=",
          "x-debug-options": "bugReporterEnabled",
          "x-discord-locale": "en-US",
          "x-discord-timezone": "America/Los_Angeles",
          "x-super-properties": "eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiQ2hyb21lIiwiZGV2aWNlIjoiIiwic3lzdGVtX2xvY2FsZSI6ImVuLVVTIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExOS4wLjYwNDUuMTk5IFNhZmFyaS81MzcuMzYiLCJicm93c2VyX3ZlcnNpb24iOiIxMTkuMC42MDQ1LjE5OSIsIm9zX3ZlcnNpb24iOiIxMCIsInJlZmVycmVyIjoiIiwicmVmZXJyaW5nX2RvbWFpbiI6IiIsInJlZmVycmVyX2N1cnJlbnQiOiIiLCJyZWZlcnJpbmdfZG9tYWluX2N1cnJlbnQiOiIiLCJyZWxlYXNlX2NoYW5uZWwiOiJzdGFibGUiLCJjbGllbnRfYnVpbGRfbnVtYmVyIjoyNTYyMzEsImNsaWVudF9ldmVudF9zb3VyY2UiOm51bGx9"
        },
        "body": `{\"session_id\":\"${sessionID}\"}`,
        "method": "POST",

        // extra properties

        "referrer": "https://discord.com/channels/@me",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "mode": "cors",
        "credentials": "include"
      })

      const d = await r.json().catch(() => { })

      if (r.status == 200) {
        if (d.new_member) {
          console.log(`Joined: ${d.guild.name}`)
        } else {
          console.log(`Was already in: ${d.guild.name}`)
        }
      } else {
        console.warn(`Could not join server of invite: ${invReal} with reason: ${d.message}`)
      }
    } catch (err) {
      console.warn(`Could not join server of invite: ${invReal} with reason: ${err.message}`)
    } finally {
      await promisifiedWait(delayBetweenJoin * 1000)
    }
  }
}

_run()
