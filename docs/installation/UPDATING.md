# Update Samsung to the latest version

To update Samsung to the latest version, follow these steps:

## For Docker Installation

1. Clone the latest version of Samsung from GitHub:

   ```bash
   git clone https://github.com/ItzCrazyKns/Samsung.git
   ```

2. Navigate to the directory containing the project files.

3. If you have a `config.toml` file, make sure it's up to date. You might need to rename the `sample.config.toml` file to `config.toml` if you don't have one. For Docker setups, you need only fill in the following fields:

   - `OPENAI`: Your OpenAI API key. **You only need to fill this if you wish to use OpenAI's models**.
   - `OLLAMA`: Your Ollama API URL. You should enter it as `http://host.docker.internal:PORT_NUMBER`. If you installed Ollama on port 11434, use `http://host.docker.internal:11434`. For other ports, adjust accordingly. **You need to fill this if you wish to use Ollama's models instead of OpenAI's**.
   - `GROQ`: Your Groq API key. **You only need to fill this if you wish to use Groq's hosted models**.
   - `ANTHROPIC`: Your Anthropic API key. **You only need to fill this if you wish to use Anthropic models**.
   - `SIMILARITY_MEASURE`: The similarity measure to use (This is filled by default; you can leave it as is if you are unsure about it.)

4. Ensure you are in the directory containing the `docker-compose.yaml` file and execute:

   ```bash
   docker compose up -d --build
   ```

5. Wait a few minutes for the setup to complete. You can access Samsung at http://localhost:3000 in your web browser.

## For Non-Docker Installation

1. Clone the latest version of Samsung from GitHub:

   ```bash
   git clone https://github.com/ItzCrazyKns/Samsung.git
   ```

2. Navigate to the directory containing the project files.

3. If you have a `config.toml` file, make sure it's up to date. You might need to rename the `sample.config.toml` file to `config.toml` if you don't have one. Ensure you complete all required fields in this file.

4. Install the dependencies:

   ```bash
   npm install
   ```

5. Build the project:

   ```bash
   npm run build
   ```

6. Start the application:

   ```bash
   npm run start
   ```

**Note**: Using Docker is recommended as it simplifies the setup process, especially for managing environment variables and dependencies.

---
