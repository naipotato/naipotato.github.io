{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";

    corepack = {
      url = "github:SnO2WMaN/corepack-flake";

      inputs = {
        nixpkgs.follows = "nixpkgs";
        flake-utils.follows = "flake-utils";
      };
    };
  };

  outputs = { flake-utils, nixpkgs, corepack, ... }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs {
          inherit system;
          overlays = [ corepack.overlays.default ];
        };
      in
      {
        devShell = pkgs.mkShell {
          packages = with pkgs; [
            nodejs_20
            (mkCorepack { nodejs = nodejs_20; pm = "yarn"; })
          ];
        };
      }
    );
}
