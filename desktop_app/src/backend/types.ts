export type SupportedPlatform = 'linux' | 'mac' | 'win';
export type SupportedArchitecture = 'arm64' | 'x86_64';

/**
 * NOTE: any podman helper binaries, must be named as they are.. they cannot include version numbers in the
 * filename as podman expects to find them this way. Below we are including the versions of those binaries
 * and where we fetched them from for "documentation" purposes.
 *
 * Mac help binaries:
 * - `gvproxy` is [`v0.8.6`](https://github.com/containers/gvisor-tap-vsock/releases/tag/v0.8.6) -- podman v5.5.2 comes with this version (see https://github.com/containers/podman/blob/v5.5.2/go.mod#L18)
 * - `vfkit` is [`v0.6.0`](https://github.com/crc-org/vfkit/releases/tag/v0.6.0) -- podman v5.5.2 comes with this version (see https://github.com/containers/podman/blob/v5.5.2/go.mod#L26)
 *   - NOTE: in the releases of `vfkit` they have `vfkit` + `vfkit-unsigned` (we are using `vfkit`.. honestly not sure of the difference?)
 *
 * Binary files for Linux were installed as follows (see https://github.com/mgoltzsche/podman-static?tab=readme-ov-file#binary-installation-on-a-host):
 * NOTE: the following commands were done for both amd64 and arm64
 *
 * VERSION=<VERSION>
 * curl -fsSL -o podman-linux-amd64.tar.gz https://github.com/mgoltzsche/podman-static/releases/download/$VERSION/podman-linux-amd64.tar.gz
 * tar -xzf podman-linux-amd64.tar.gz
 * cp -r podman-linux-amd64/usr podman-linux-amd64/etc ./resources/bin/linux/<arm64 or amd64>/podman
 *
 */
export type SupportedBinary = 'ollama-v0.11.4' | 'podman-remote-static-v5.5.2';
