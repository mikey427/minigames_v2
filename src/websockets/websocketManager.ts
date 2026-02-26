// Websocket state manager

type websocketConnection = {
	player1: WebSocket;
	player2: WebSocket;
	gameType: string;
	gameData: unknown;
	status: string;
	createdAt: Date;
	updatedAt: Date;
};

const websockets = new Map();

// Create map
// TODO: Update wsId type later
export function createOrGetWebsocketConnection(wsId: any) {
	if (!websockets.has(wsId)) {
		const newInstance = {
			player1: wsId,
			player2: null,
			gameType: null,
			gameData: null,
			status: "lobby",
			createdAt: Date.now(),
			updatedAt: Date.now(),
		};
		websockets.set(wsId, newInstance);
	}
}

// Add to map

// Delete map

// Clean up websocket connections after inactivity (later)
