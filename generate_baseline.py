from detect_secrets.core.scan import scan
import json
results = scan('.')  # escaneia o repositório atual
# detect-secrets pode expor um método para serializar; se não, serialize o dict básico
try:
    baseline = results.json()
except Exception:
    # fallback: transformar em dict simples
    baseline = {"results": str(results)}
with open('.secrets.baseline.clean','w',encoding='utf-8') as f:
    json.dump(baseline, f)
print("WROTE")
