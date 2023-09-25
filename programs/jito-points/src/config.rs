use anyhow::{Context, Error, Result};
use serde::Deserialize;
use std::{path::Path, str::FromStr, fs};

#[derive(Clone, Debug, Deserialize)]
pub struct Config {
  pub rpc_url: String,
}

impl Config {
  pub fn from_path(p: impl AsRef<Path>) -> Result<Self> {
      fs::read_to_string(&p)
          .with_context(|| format!("Error reading the file with path: {}", p.as_ref().display()))?
          .parse::<Self>()
  }
}

impl FromStr for Config {
  type Err = Error;

  fn from_str(s: &str) -> Result<Self, Self::Err> {
      let config: Config = toml::from_str(s)
          .map_err(|e| anyhow::format_err!("Could not deserialize config: {}", e.to_string()))?;
      Ok(config)
  }
}
