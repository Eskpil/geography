export enum OPCodes {
    Dispatch = 0,
    Heartbeat = 1,
    Identify = 2,
    Precense = 3,
    Voice = 4,
    Resume = 6,
    Reconnect = 7,
    Members = 8,
    Session = 9,
    Hello = 10,
    ACK = 11,
}

export const Heartbeat = {
    op: OPCodes.Heartbeat,
    d: null,
};

export const Identify = {
    op: OPCodes.Identify,
    d: {
        token: "",
        intents: 513,
        properties: {
            $os: "linux",
            $browser: "geography",
            $device: "geography",
        },
    },
};
