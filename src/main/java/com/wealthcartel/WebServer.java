package com.wealthcartel;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

public class WebServer {
    private static final int PORT = 8080;
    private static final String ROOT_DIR = ".";
    private static final Map<String, String> MIME_TYPES = new HashMap<>();

    static {
        // Initialize MIME types
        MIME_TYPES.put("html", "text/html");
        MIME_TYPES.put("css", "text/css");
        MIME_TYPES.put("js", "application/javascript");
        MIME_TYPES.put("jpg", "image/jpeg");
        MIME_TYPES.put("jpeg", "image/jpeg");
        MIME_TYPES.put("png", "image/png");
        MIME_TYPES.put("gif", "image/gif");
        MIME_TYPES.put("ico", "image/x-icon");
        MIME_TYPES.put("svg", "image/svg+xml");
        MIME_TYPES.put("json", "application/json");
        MIME_TYPES.put("woff", "font/woff");
        MIME_TYPES.put("woff2", "font/woff2");
        MIME_TYPES.put("ttf", "font/ttf");
        MIME_TYPES.put("otf", "font/otf");
        MIME_TYPES.put("eot", "application/vnd.ms-fontobject");
    }

    public static void main(String[] args) throws IOException {
        System.out.println("Starting server on port " + PORT);
        
        HttpServer server = HttpServer.create(new InetSocketAddress(PORT), 0);
        server.createContext("/", new StaticFileHandler());
        server.setExecutor(null); // Use the default executor
        server.start();
        
        System.out.println("Server started. Visit http://localhost:" + PORT);
    }

    static class StaticFileHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            String requestPath = exchange.getRequestURI().getPath();
            
            // Default to index.html for root path
            if ("/".equals(requestPath)) {
                requestPath = "/index.html";
            }
            
            // Construct the file path
            Path filePath = Paths.get(ROOT_DIR, requestPath);
            File file = filePath.toFile();
            
            if (!file.exists() || file.isDirectory()) {
                // Return 404 if file not found
                sendNotFound(exchange);
                return;
            }
            
            // Get the MIME type based on file extension
            String contentType = getMimeType(file.getName());
            
            // Set response headers
            exchange.getResponseHeaders().set("Content-Type", contentType);
            exchange.sendResponseHeaders(200, file.length());
            
            // Send the file content
            try (
                OutputStream os = exchange.getResponseBody();
                FileInputStream fs = new FileInputStream(file)
            ) {
                byte[] buffer = new byte[4096];
                int count;
                while ((count = fs.read(buffer)) != -1) {
                    os.write(buffer, 0, count);
                }
                os.flush();
            }
        }
        
        private String getMimeType(String fileName) {
            String extension = getFileExtension(fileName);
            return MIME_TYPES.getOrDefault(extension, "application/octet-stream");
        }
        
        private String getFileExtension(String fileName) {
            int lastDotIndex = fileName.lastIndexOf('.');
            if (lastDotIndex > 0) {
                return fileName.substring(lastDotIndex + 1).toLowerCase();
            }
            return "";
        }
        
        private void sendNotFound(HttpExchange exchange) throws IOException {
            String response = "<!DOCTYPE html><html><head><title>404 Not Found</title></head>" +
                             "<body><h1>404 Not Found</h1><p>The requested resource could not be found.</p></body></html>";
            exchange.getResponseHeaders().set("Content-Type", "text/html");
            exchange.sendResponseHeaders(404, response.length());
            try (OutputStream os = exchange.getResponseBody()) {
                os.write(response.getBytes());
            }
        }
    }
} 