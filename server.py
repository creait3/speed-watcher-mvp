# simple Python server for Speed-Wächter MVP
import http.server
import socketserver
import os

class Handler(http.server.SimpleHTTPRequestHandler):
    def do_POST(self):
        length = int(self.headers.get('Content-Length', 0))
        self.rfile.read(length)
        self.send_response(204)
        self.end_headers()

PORT = 8000
# serve files from current directory
os.chdir(os.path.dirname(__file__))
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("Serving at port", PORT)
    httpd.serve_forever()
