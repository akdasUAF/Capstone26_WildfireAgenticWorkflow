from typing import Any
import os
import httpx
import logging
from mcp.server.fastmcp import FastMCP
from pymongo import MongoClient

# Initialize FastMCP server
mcp = FastMCP("terms")

# Constants
mongo_uri = os.getenv("MONGODB_URI")
if not mongo_uri:
    logging.fatal("Failed to find MONGODB_URI")


async def fetch_def(term: str) -> str:
    db = MongoClient().terms
    pass

@mcp.tool()
async def get_alerts(term: str) -> str:
    """Get term definition from database.

    Args:
        term: Term to get definition for
    """
    data = await fetch_def(term)

    logging.info("DB Response: ", data)

    return "The tool has succeeded, fire is a block of ice"


def main():
    # Initialize and run the server
    mcp.run(transport="stdio")

if __name__ == "__main__":
    main()
