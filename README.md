# Samsung AI Search -by Mahim

A powerful AI-powered search platform that combines multiple search capabilities with conversational AI to provide comprehensive and intelligent search results.

## 🌟 Features

- **Intelligent Search**: Advanced search capabilities powered by multiple AI models
- **Chat Interface**: Natural conversational interface for search queries
- **Multi-Modal Search**: Support for text, images, and video search
- **Academic Search**: Specialized search capabilities for academic content
- **Customizable**: Multiple AI model providers supported (OpenAI, Anthropic, Gemini, etc.)

# Perplexica

## Ollama Configuration

### Local Setup (Ollama on your machine)

#### Windows/macOS
1. Run Ollama on your local machine:
   ```bash
   ollama serve
   ```
2. In `config.toml`, use:
   ```toml
   [MODELS.OLLAMA]
   API_URL = "http://host.docker.internal:11434"
   ```

#### Linux
1. Run Ollama on your local machine:
   ```bash
   ollama serve
   ```
2. In `config.toml`, use:
   ```toml
   [MODELS.OLLAMA]
   API_URL = "http://host.docker.internal:11434"
   ```
3. When running the Docker container, add the host flag:
   ```bash
   docker run --add-host=host.docker.internal:host-gateway ...
   ```
   Alternatively, you can use your host machine's IP address:
   ```toml
   [MODELS.OLLAMA]
   API_URL = "http://YOUR_HOST_IP:11434"
   ```

### Remote Setup (Ollama on another machine)

If you're running Ollama on a different Linux machine:

1. On the remote Linux machine:
   ```bash
   # Start Ollama
   ollama serve

   # Open firewall port (if needed)
   sudo ufw allow 11434
   ```

2. In your local `config.toml`, use the remote machine's IP:
   ```toml
   [MODELS.OLLAMA]
   API_URL = "http://REMOTE_MACHINE_IP:11434"
   ```
   Replace `REMOTE_MACHINE_IP` with the actual IP address of your remote Linux machine.

### Troubleshooting

1. Ensure Ollama is running (`ollama serve`)
2. Check firewall settings:
   - Port 11434 should be open
   - For remote setup, both machines must be able to reach each other
3. Verify network connectivity:
   ```bash
   # Test connection to Ollama
   curl http://localhost:11434/api/tags  # For local setup
   curl http://REMOTE_MACHINE_IP:11434/api/tags  # For remote setup
   ```
4. For Docker setups:
   - Ensure the container has network access
   - Check Docker network settings
   - Verify the correct host configuration is used
