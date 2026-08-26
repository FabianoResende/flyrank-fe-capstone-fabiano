const pidFile = path.join(ROOT, 'mcp_test_server.pid');

server.on('error', (err) => {
  if (err && err.code === 'EADDRINUSE') {
    console.error(`ERROR: port ${PORT} already in use. Another instance may be running.`);
    process.exit(1);
  } else {
    console.error('server error', err);
    process.exit(1);
  }
});

server.listen(PORT, HOST, () => {
  console.log(`mcp_test_server listening on ${HOST}:${PORT}`);
  try { require('fs').writeFileSync(pidFile, String(process.pid), 'utf8'); } catch (e) {}
});

process.on('exit', () => {
  try { require('fs').unlinkSync(pidFile); } catch (e) {}
});
process.on('SIGINT', () => process.exit(0));
process.on('SIGTERM', () => process.exit(0));
