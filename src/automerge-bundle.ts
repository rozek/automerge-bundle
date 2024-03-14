import { next }                           from "@automerge/automerge"
import { isValidAutomergeUrl, Repo }      from '@automerge/automerge-repo'
import { IndexedDBStorageAdapter }        from "@automerge/automerge-repo-storage-indexeddb"
import { BrowserWebSocketClientAdapter }  from "@automerge/automerge-repo-network-websocket"
import { BroadcastChannelNetworkAdapter } from "@automerge/automerge-repo-network-broadcastchannel"

	const automerge = {
	  next, 
	  isValidAutomergeUrl, Repo,
	  IndexedDBStorageAdapter, 
	  BrowserWebSocketClientAdapter, 
	  BroadcastChannelNetworkAdapter
	}

// @ts-ignore allow "window.automerge"
	window.automerge = automerge

	document.dispatchEvent(
	  new CustomEvent('automerge',{ detail:automerge })
	)
