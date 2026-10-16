(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9493],{14632:(e,t,a)=>{"use strict";a.d(t,{SchemaRegistryDeepDivePage:()=>I});var s=a(95155),r=a(98500),i=a.n(r),o=a(58381),n=a(87069),c=a(75041),l=a(27774),d=a(60508),m=a(92194),h=a(19776),p=a(49345),u=a(85757),f=a(10277),y=a(45160),v=a(83036),g=a(86901),x=a(65576),b=a(8195),A=a(58411),S=a(33024),j=a(48106),N=a(439);let R=[{label:"Subjects",value:"~1000s",hint:"one per logical stream (users-value, orders-key, etc.)",deltaTone:"flat"},{label:"Schemas / subject",value:"~5-20",hint:"versioned evolution history per subject",deltaTone:"flat"},{label:"Compatibility levels",value:"4",hint:"BACKWARD / FORWARD / FULL / NONE (+ transitive variants)",deltaTone:"flat"},{label:"Evolution history",value:"compacted",hint:"Kafka topic '_schemas' (single partition, compacted)",deltaTone:"flat"}],k=[{num:1,name:"Subject",card:"ConceptCard #53",color:"text-emerald-400",desc:"Named schema collection (e.g., 'users-value'). The '-value' / '-key' suffix is convention. Each register call appends a new version.",focus:"namespacing",math:"SubjectVersion(subject) → version n+1"},{num:2,name:"Compatibility",card:"ConceptCard #53",color:"text-violet-400",desc:"BACKWARD (default) / FORWARD / FULL / NONE. Per-subject override via PUT /config/{subject}. Transitive = check against ALL versions.",focus:"policy",math:"compat(S_n, S_{n+1}) ∈ {BW, FW, FULL, NONE}"},{num:3,name:"Avro schema evolution",card:"ConceptCard #53",color:"text-sky-400",desc:"Schema-first wire format. Producer + consumer exchange 4-byte schema ID; consumer looks up schema by ID. Default compatibility BACKWARD.",focus:"wire format (Kafka default)",math:"msg = [0xFF, schema_id(4), payload(avro)]"},{num:4,name:"Protobuf vs Avro vs JSON Schema",card:"ConceptCard #53",color:"text-amber-400",desc:"Avro = schema-first (Kafka data). Protobuf = tag-numbered (gRPC). JSON Schema = lightweight (REST). Same compatibility math at different layers.",focus:"wire format tradeoff",math:"Avro: S_{n+1} ⊇ S_n; Protobuf: tag numbers stable; JSON Schema: weaker types"},{num:5,name:"Latest vs URL strategy",card:"ConceptCard #53",color:"text-rose-400",desc:"Latest = consumer auto-tracks head (risky for shared topics). URL = consumer pins to specific version (safe for cross-team contracts).",focus:"versioning strategy",math:"GET /subjects/{s}/versions/latest vs /versions/{n}"},{num:6,name:"Soft vs hard delete",card:"ConceptCard #53",color:"text-fuchsia-400",desc:"Soft delete = mark version deleted but schema ID still resolvable (consumers don't break). Hard delete = purge from registry (consumers break).",focus:"lifecycle",math:"DELETE /subjects/{s} vs /permanent"},{num:7,name:"Schema ID in message headers",card:"ConceptCard #53",color:"text-cyan-400",desc:"Every record carries a 4-byte schema ID prefix (Confluent wire format: 0xFF magic byte + 4-byte big-endian schema ID + Avro payload).",focus:"wire format",math:"msg = 0x0 | schema_id(4 bytes) | payload"}],w=[{symbol:"SubjectVersion(s)",code:"POST /subjects/{subject}/versions",explanation:"register a new schema version under a named subject. Returns the schema_id (4-byte int)."},{symbol:"compat(S_n, S_{n+1})",code:"POST /compatibility/subjects/{s}/versions/{n}",explanation:"compatibility checker: returns true/false + violations. Default policy BACKWARD."},{symbol:"BACKWARD",code:"S_{n+1} ⊇ S_n (new reader reads old data)",explanation:"safe evolution: add optional field, add default, widen int32→int64, delete field."},{symbol:"FORWARD",code:"S_n ⊇ S_{n+1} (old reader reads new data)",explanation:"old consumers haven't upgraded. Required when deploying producer before consumers."},{symbol:"FULL",code:"BACKWARD ∧ FORWARD",explanation:"both directions safe. Strictest — used for cross-team shared topics where you can't coordinate deploys."},{symbol:"BREAKING",code:"∃ field rename / type change / required delete",explanation:"no valid transformation f. Old data unreadable with new schema. Requires blue-green or rollback."},{symbol:"SchemaID in msg",code:"0x0 | schema_id(4 bytes) | avro_payload",explanation:"Confluent wire format. Consumer looks up schema by ID — no inline schema, no drift between producer and consumer."}],C=`# ============================================================
# Confluent Schema Registry REST API — the universal contract registry
# Free: OSS (Apache 2.0). Backed by compacted Kafka topic '_schemas'.
# ============================================================

# 1. Register a new schema version under subject 'users-value'
curl -X POST http://schema-registry:8081/subjects/users-value/versions \\
  -H "Content-Type: application/vnd.schemaregistry.v1+json" \\
  -d '{
    "schema": "{\\"type\\":\\"record\\",\\"name\\":\\"User\\",\\"fields\\":[{\\"name\\":\\"id\\",\\"type\\":\\"int\\"},{\\"name\\":\\"name\\",\\"type\\":\\"string\\"},{\\"name\\":\\"email\\",\\"type\\":\\"string\\"}]}"
  }'
# Response: { "id": 42 }   <- the 4-byte schema_id embedded in every record

# 2. Pre-flight compatibility check BEFORE registering (CI gate)
curl -X POST http://schema-registry:8081/compatibility/subjects/users-value/versions/latest \\
  -H "Content-Type: application/vnd.schemaregistry.v1+json" \\
  -d '{
    "schema": "{\\"type\\":\\"record\\",\\"name\\":\\"User\\",\\"fields\\":[{\\"name\\":\\"id\\",\\"type\\":\\"int\\"},{\\"name\\":\\"name\\",\\"type\\":\\"string\\"},{\\"name\\":\\"email\\",\\"type\\":\\"string\\"},{\\"name\\":\\"phone\\",\\"type\\":[\\"null\\",\\"string\\"],\\"default\\":null}]}"
  }'
# Response: { "is_compatible": true }   <- v2 is BACKWARD-compatible (phone optional)

# 3. Set the global default compatibility policy
curl -X PUT http://schema-registry:8081/config \\
  -H "Content-Type: application/vnd.schemaregistry.v1+json" \\
  -d '{"compatibility": "BACKWARD"}'
# Options: NONE | BACKWARD | FORWARD | FULL | BACKWARD_TRANSITIVE | FORWARD_TRANSITIVE | FULL_TRANSITIVE

# 4. Per-subject override — pin FULL_TRANSITIVE for critical shared topics
curl -X PUT http://schema-registry:8081/config/users-value \\
  -H "Content-Type: application/vnd.schemaregistry.v1+json" \\
  -d '{"compatibility": "FULL_TRANSITIVE"}'

# 5. List all versions of a subject
curl http://schema-registry:8081/subjects/users-value/versions
# Response: [1, 2, 3]   <- three versions registered

# 6. Fetch a specific version (consumer pinning / URL strategy)
curl http://schema-registry:8081/subjects/users-value/versions/2
# Response: { "subject": "users-value", "version": 2, "id": 43, "schema": "..." }

# 7. Soft delete (mark version as deleted — schema_id still resolvable)
curl -X DELETE http://schema-registry:8081/subjects/users-value/versions/3
# 8. Hard delete (PERMANENTLY purge — BREAKS consumers still on that schema_id)
curl -X DELETE http://schema-registry:8081/subjects/users-value/versions/3/permanent`,T=`# ============================================================
# Avro schema evolution — the canonical data-platform wire format
# 4 versions: v1 baseline → v2 add optional field → v3 widen int → v4 BREAKING rename
# ============================================================

# v1 — baseline (3 required fields)
SCHEMA_V1 = {
    "type": "record",
    "name": "User",
    "namespace": "com.example",
    "fields": [
        {"name": "id",    "type": "int"},
        {"name": "name",  "type": "string"},
        {"name": "email", "type": "string"}
    ]
}
# Register: POST /subjects/users-value/versions  →  schema_id=42

# v2 — add optional field 'phone' (BACKWARD-compatible)
# New readers can read v1 data: 'phone' field absent → use default (null).
# Old readers can NOT read v2 data: they don't know 'phone' — but Avro
# resolution ignores unknown fields when reading, so this is also FORWARD.
# Verdict: FULL-compatible (both directions safe).
SCHEMA_V2 = {
    "type": "record",
    "name": "User",
    "namespace": "com.example",
    "fields": [
        {"name": "id",    "type": "int"},
        {"name": "name",  "type": "string"},
        {"name": "email", "type": "string"},
        {"name": "phone", "type": ["null", "string"], "default": None}  # optional
    ]
}
# Register: POST /subjects/users-value/versions  →  schema_id=43

# v3 — widen 'id' from int to long (BACKWARD-compatible, NOT forward)
# New readers (expecting long) can read v1 data (int promoted to long).
# Old readers (expecting int) cannot read v3 data (long doesn't fit int).
# Verdict: BACKWARD only.
SCHEMA_V3 = {
    "type": "record",
    "name": "User",
    "namespace": "com.example",
    "fields": [
        {"name": "id",    "type": "long"},  # widened: int → long
        {"name": "name",  "type": "string"},
        {"name": "email", "type": "string"},
        {"name": "phone", "type": ["null", "string"], "default": None}
    ]
}
# Register: POST /subjects/users-value/versions  →  schema_id=44

# v4 — rename 'email' to 'email_address' (BREAKING)
# New readers can't find 'email' in v1-v3 data.
# Old readers can't find 'email_address' in v4 data.
# No transformation f: S_4 ⊇ S_3 exists.
# Verdict: BREAKING — requires blue-green deploy or rollback.
SCHEMA_V4_BREAKING = {
    "type": "record",
    "name": "User",
    "namespace": "com.example",
    "fields": [
        {"name": "id",            "type": "long"},
        {"name": "name",          "type": "string"},
        {"name": "email_address", "type": "string"},  # RENAMED — breaks v1-v3 readers
        {"name": "phone",         "type": ["null", "string"], "default": None}
    ]
}
# Compatibility check: POST /compatibility/subjects/users-value/versions/latest
# Response: { "is_compatible": false, "messages": ["schema is not backward compatible"] }`,P=`# Confluent Schema Registry — global + per-subject compatibility config
# Free: OSS (Apache 2.0). Backed by compacted Kafka topic '_schemas'.

# 1. GLOBAL default (applied to all new subjects unless overridden)
compatibility.level: BACKWARD   # default; choices:
                                # NONE | BACKWARD | FORWARD | FULL
                                # BACKWARD_TRANSITIVE | FORWARD_TRANSITIVE | FULL_TRANSITIVE
# Transitive = check against ALL previous versions, not just the latest.
# Use FULL_TRANSITIVE for cross-team shared topics (strictest).

# 2. PER-SUBJECT overrides — pin policies for critical schemas
schema.registry:
  subjects:
    "users-value":
      compatibility: FULL_TRANSITIVE  # both directions, all versions
    "orders-value":
      compatibility: BACKWARD_TRANSITIVE
    "click-events-value":
      compatibility: NONE              # firehose — no constraints

# 3. Kafka topic that backs the registry (compacted, single partition)
kafka:
  bootstrap.servers: "kafka:9092"
  schema.registry.topic: "_schemas"
  schema.registry.topic.replication.factor: 3
  schema.registry.topic.partitions: 1   # MUST be 1 for ordering
  schema.registry.topic.cleanup.policy: "compact"  # tombstones ok
  schema.registry.topic.delete.retention.ms: 604800000  # 7 days

# 4. mTLS for the REST API (production)
schema.registry.ssl:
  truststore.location: "/etc/schema-registry/keystore.jks"
  truststore.password: "\${SR_TS_PASS}"
  keystore.location: "/etc/schema-registry/keystore.jks"
  keystore.password: "\${SR_KS_PASS}"
  endpoint.identification.algorithm: "HTTPS"

# 5. Avro / Protobuf / JSON Schema — supported side-by-side
schema.registry.type: "AVRO"  # default; set "PROTOBUF" or "JSON" per subject`,E=`# Kafka producer with schema ID — Confluent wire format
# Every record carries: 0x0 (magic byte) | schema_id (4 bytes) | avro_payload
# Consumer looks up schema by ID — no inline schema, no drift.

from confluent_kafka import SerializingProducer, DeserializingConsumer
from confluent_kafka.schema_registry import SchemaRegistryClient, Schema
from confluent_kafka.schema_registry.avro import AvroSerializer, AvroDeserializer

# 1. Schema Registry client (caches schemas locally after first lookup)
sr = SchemaRegistryClient({"url": "http://schema-registry:8081"})

# 2. Define schema (or fetch latest from registry)
USER_SCHEMA_STR = """
{"type": "record", "name": "User", "fields": [
  {"name": "id", "type": "int"},
  {"name": "name", "type": "string"},
  {"name": "email", "type": "string"}
]}
"""

# 3. Producer — auto-registers schema on first send, then reuses schema_id
producer = SerializingProducer({
    "bootstrap.servers": "kafka:9092",
    "value.serializer": AvroSerializer(
        schema_registry_client=sr,
        schema_str=USER_SCHEMA_STR,
        conf={"auto.register.schemas": False},  # CI gates registration
    ),
})

# Send a record — wire format: 0x0 | schema_id(4) | avro_payload
producer.produce(topic="users", value={"id": 1, "name": "Ada", "email": "ada@x.io"})
producer.flush()

# 4. Consumer — deserializer fetches schema by ID from record header
consumer = DeserializingConsumer({
    "bootstrap.servers": "kafka:9092",
    "group.id": "etl",
    "value.deserializer": AvroDeserializer(schema_registry_client=sr),
})
consumer.subscribe(["users"])
while True:
    msg = consumer.poll(1.0)
    if msg is None: continue
    print(msg.value())  # already deserialized using the writer's schema`;function I(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.zY,{eyebrow:"Phase 29 \xb7 Schema Registry Deep Dive \xb7 Phase 15 Data Platform & Infrastructure",title:"Schema Registry Deep Dive — the universal contract registry for evolving data",description:"Consolidated deep-dive into the 7 schema-registry primitives that turn a wire format (Avro / Protobuf / JSON Schema) into a versioned, compatibility-checked contract registry. Subject naming, BACKWARD/FORWARD/FULL/NONE compatibility, Avro schema evolution, the three wire-format tradeoffs, Latest vs URL versioning, soft vs hard delete, and the 4-byte schema ID prefix on every Kafka record. Each concept is summarized inline and made interactive with the 2 Phase 29 popup demos (Schema Evolution Visualizer + Service Mesh Traffic Visualizer) embedded below. The page consolidates ConceptCard 53 (SCHEMA_REGISTRY) and complements /schema-registry/ (Phase 2 Ingestion) which covers the introductory Kafka producer/consumer integration."}),(0,s.jsx)("div",{className:"grid gap-4 md:grid-cols-2 lg:grid-cols-4",children:R.map(e=>(0,s.jsxs)("div",{className:"rounded-xl border border-zinc-200/20 bg-zinc-900/60 p-4 backdrop-blur",children:[(0,s.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-zinc-500 font-medium",children:e.label}),(0,s.jsx)("p",{className:"text-2xl font-bold text-zinc-100 mt-1",children:e.value}),(0,s.jsx)("p",{className:"text-[11px] text-zinc-400 mt-0.5",children:e.hint})]},e.label))}),(0,s.jsx)(o.iv,{title:"The 7 schema-registry primitives — structured learning path",description:"Seven primitives, each rooted in ConceptCard 53. Walk through them in order: namespacing (Subject) → policy (Compatibility) → wire format (Avro evolution) → tradeoff (Protobuf vs Avro vs JSON Schema) → versioning (Latest vs URL) → lifecycle (Soft vs Hard delete) → wire format (Schema ID in headers).",icon:(0,s.jsx)(g.A,{className:"h-5 w-5"}),badge:"Learning Path",children:(0,s.jsx)("div",{className:"space-y-2",children:k.map(e=>(0,s.jsxs)("div",{className:"flex items-start gap-3 p-3 rounded-md border border-border/40 hover:border-primary/40 hover:bg-primary/3 transition-colors",children:[(0,s.jsx)("div",{className:"flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 font-mono text-xs font-bold text-primary",children:e.num}),(0,s.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 flex-wrap",children:[(0,s.jsx)("p",{className:`text-sm font-semibold ${e.color}`,children:e.name}),(0,s.jsx)(y.E,{variant:"outline",className:"text-[10px] gap-1 px-1.5 py-0",children:e.card}),(0,s.jsxs)("span",{className:"text-[10px] text-zinc-500 uppercase tracking-wider",children:["focus: ",e.focus]})]}),(0,s.jsx)("p",{className:"text-xs text-muted-foreground mt-1 leading-relaxed",children:e.desc}),(0,s.jsx)("p",{className:"text-[10px] font-mono text-zinc-500 mt-1",children:e.math})]})]},e.num))})}),(0,s.jsx)(o.iv,{title:"Math → Code mapping — the 7 primitives in 7 symbols",description:"Each schema-registry primitive maps to a single mathematical invariant. The table shows the symbol, the REST API / code that implements it, and the conceptual explanation.",icon:(0,s.jsx)(x.A,{className:"h-5 w-5"}),children:(0,s.jsx)("div",{className:"overflow-x-auto",children:(0,s.jsxs)("table",{className:"w-full text-xs",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{className:"border-b border-border/60 text-[10px] uppercase tracking-wider text-muted-foreground",children:[(0,s.jsx)("th",{className:"text-left px-3 py-2 font-medium",children:"Math symbol"}),(0,s.jsx)("th",{className:"text-left px-3 py-2 font-medium",children:"Code (REST / YAML / Python)"}),(0,s.jsx)("th",{className:"text-left px-3 py-2 font-medium",children:"Explanation"})]})}),(0,s.jsx)("tbody",{children:w.map(e=>(0,s.jsxs)("tr",{className:"border-b border-border/20",children:[(0,s.jsx)("td",{className:"px-3 py-2 font-mono text-emerald-400 whitespace-nowrap",children:e.symbol}),(0,s.jsx)("td",{className:"px-3 py-2 font-mono text-sky-400 text-[11px]",children:e.code}),(0,s.jsx)("td",{className:"px-3 py-2 text-muted-foreground",children:e.explanation})]},e.symbol))})]})})}),(0,s.jsxs)(o.iv,{title:"Confluent Schema Registry REST API — the universal contract registry",description:"The REST API that backs every contract registry. POST /subjects/{subject}/versions registers a new schema. POST /compatibility/subjects/{s}/versions/{n} is the CI gate that rejects breaking changes before they ship. PUT /config/{subject} pins per-subject policy. Single-partition compacted Kafka topic '_schemas' is the source of truth.",icon:(0,s.jsx)(b.A,{className:"h-5 w-5"}),children:[(0,s.jsx)("div",{className:"prose prose-sm dark:prose-invert max-w-none",children:(0,s.jsxs)("p",{className:"text-sm text-muted-foreground leading-relaxed",children:["The REST API is the universal surface — every contract registry (Confluent, Apicurio, AWS Glue Schema Registry) implements the same endpoints. The wire format is JSON: the Avro/Protobuf schema is escaped as a JSON string inside the request body. The response on register is just ",(0,s.jsx)("code",{children:"{ id: 42 }"})," — the 4-byte schema ID that gets prepended to every record on the wire. The compatibility endpoint is the CI gate: ship the schema to it before registering, fail the build if it returns ",(0,s.jsx)("code",{children:"is_compatible: false"}),"."]})}),(0,s.jsx)("div",{className:"mt-4",children:(0,s.jsx)(h.N,{code:C,language:"bash",filename:"schema_registry_rest.sh"})})]}),(0,s.jsxs)(o.iv,{title:"Avro schema evolution — 4 versions, 4 compatibility verdicts",description:"Four versions of a User schema demonstrate the BACKWARD/FORWARD/FULL/BREAKING invariants. v1 baseline (3 required fields). v2 add optional 'phone' (FULL — both directions). v3 widen 'id' int→long (BACKWARD only — old int readers can't read long). v4 rename 'email'→'email_address' (BREAKING — no valid transformation, requires blue-green or rollback).",icon:(0,s.jsx)(A.A,{className:"h-5 w-5"}),children:[(0,s.jsx)("div",{className:"prose prose-sm dark:prose-invert max-w-none",children:(0,s.jsx)("p",{className:"text-sm text-muted-foreground leading-relaxed",children:"Avro is the canonical wire format for Kafka data platforms because the schema is stored in the registry, not in the message — only a 4-byte ID travels with each record. This means producers and consumers can be on different schema versions and still decode correctly. The compatibility checker is the safety net: it rejects v4 (the rename) before it ships, forcing the team to either blue-green the consumer fleet or roll back to v3. Without this gate, a breaking rename ships silently and consumers start failing on the first read of new data — at 3am."})}),(0,s.jsx)("div",{className:"mt-4",children:(0,s.jsx)(h.N,{code:T,language:"python",filename:"avro_evolution.py"})})]}),(0,s.jsxs)(o.iv,{title:"Compatibility config — global defaults + per-subject overrides",description:"Global default BACKWARD (safe evolution: new readers read old data). Per-subject override to FULL_TRANSITIVE for cross-team shared topics (strictest — both directions, all versions). The Kafka topic '_schemas' is single-partition compacted — the source of truth. mTLS for the REST API in production.",icon:(0,s.jsx)(S.A,{className:"h-5 w-5"}),children:[(0,s.jsx)("div",{className:"prose prose-sm dark:prose-invert max-w-none",children:(0,s.jsx)("p",{className:"text-sm text-muted-foreground leading-relaxed",children:'The compatibility policy is the social contract between producers and consumers. BACKWARD (default) says: "producers can ship any change that lets new readers read old data" — i.e., add optional fields, add defaults, widen types. FORWARD (rare) says: "producers can ship any change that lets old readers read new data" — i.e., delete fields, add defaults. FULL (strict) says both. FULL_TRANSITIVE says "both directions, against ALL previous versions, not just the latest" — the strictest, used when you can\'t coordinate consumer deploys.'})}),(0,s.jsx)("div",{className:"mt-4",children:(0,s.jsx)(h.N,{code:P,language:"yaml",filename:"compatibility_config.yaml"})})]}),(0,s.jsxs)(o.iv,{title:"Kafka producer with schema ID — Confluent wire format",description:"Every Avro record carries 0x0 (magic byte) + schema_id (4 bytes) + avro_payload. Consumer looks up the schema by ID at read time — no inline schema in the message, no drift between producer and consumer. confluent-kafka-python wraps this; the SerializingProducer auto-registers the schema on first send.",icon:(0,s.jsx)(j.A,{className:"h-5 w-5"}),children:[(0,s.jsx)("div",{className:"prose prose-sm dark:prose-invert max-w-none",children:(0,s.jsx)("p",{className:"text-sm text-muted-foreground leading-relaxed",children:"The 4-byte schema ID is the secret to Avro's evolution story. Producers fetch the ID once at startup (cached forever), then prepend it to every record. Consumers fetch the schema by ID on first read (cached forever) — if the producer is on v2 and the consumer is on v1, the consumer still decodes correctly because it gets the writer's schema (v2) by ID, then resolves it against its own reader's schema (v1) using Avro's resolution rules (drop unknown fields, fill defaults). This is why Avro is the wire format for every Kafka data platform: the schema registry decouples producer deploys from consumer deploys."})}),(0,s.jsx)("div",{className:"mt-4",children:(0,s.jsx)(h.N,{code:E,language:"python",filename:"kafka_producer_schema_id.py"})})]}),(0,s.jsxs)(o.iv,{title:"Phase 29 popup demos — make the contract registry interactive",description:"Two interactive visualizers. The Schema Evolution Visualizer shows the BACKWARD/FORWARD/FULL/BREAKING invariants in action (v1→v2 add field, v2→v3 rename field). The Service Mesh Traffic Visualizer shows the sibling data-platform pattern: standard mesh + lineage tracking per RPC.",icon:(0,s.jsx)(g.A,{className:"h-5 w-5"}),badge:"Interactive",children:[(0,s.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"1. Schema Evolution Visualizer"}),' — start with v1 User schema (id, name, email — 3 required fields). Click "Evolve to v2" to add an optional "phone" field (BACKWARD-compatible — old readers can still read new data, the new field has a default). Click "Evolve to v3" to try renaming "email" to "email_address" (BREAKING — old readers can\'t find "email"). Each step shows the schema diff (added/removed/renamed fields) and the compatibility verdict (BACKWARD / FORWARD / FULL / NONE). Color-coded: green = compatible, red = breaking. Status banner: "v2 is BACKWARD-compatible (safe deploy)" or "v3 is BREAKING (requires blue-green or rollback)".']}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{className:"text-foreground/80",children:"2. Service Mesh Traffic Visualizer"})," — the sibling Phase 29 demo for the /service-mesh-data/ page. 4 services in a mesh (spark-driver, delta-lake, unity-catalog, mlflow). Send 100 RPCs and watch each animate through the mesh with mTLS handshake (purple) → routing (blue) → response (green). Side panel shows the lineage graph (per-RPC source_table → destination_table edges). Toggle shadow traffic (10%) to see duplicated RPCs in amber. Stats: total RPCs, mTLS handshakes, lineage edges captured, shadow traffic count."]})]}),(0,s.jsx)(f.j,{})]}),(0,s.jsx)(o.iv,{title:"Cross-vendor comparison — what each schema registry does uniquely",description:"Each vendor implementation has a unique strength. The table shows where Confluent leads (original), where Apicurio follows (multi-protocol), and where AWS Glue matches (serverless).",icon:(0,s.jsx)(N.A,{className:"h-5 w-5"}),children:(0,s.jsx)("div",{className:"overflow-x-auto",children:(0,s.jsxs)("table",{className:"w-full text-xs",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{className:"border-b border-border/60 text-[10px] uppercase tracking-wider text-muted-foreground",children:[(0,s.jsx)("th",{className:"text-left px-3 py-2 font-medium",children:"Feature"}),(0,s.jsx)("th",{className:"text-left px-3 py-2 font-medium",children:"Confluent"}),(0,s.jsx)("th",{className:"text-left px-3 py-2 font-medium",children:"Apicurio"}),(0,s.jsx)("th",{className:"text-left px-3 py-2 font-medium",children:"AWS Glue"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{className:"border-b border-border/20",children:[(0,s.jsx)("td",{className:"px-3 py-2 font-mono text-emerald-400",children:"Backed by"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-300",children:"Kafka topic '_schemas'"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"Postgres or Kafka"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"S3 + IAM (serverless)"})]}),(0,s.jsxs)("tr",{className:"border-b border-border/20",children:[(0,s.jsx)("td",{className:"px-3 py-2 font-mono text-violet-400",children:"Wire formats"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-300",children:"Avro, Protobuf, JSON Schema"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"Avro, Protobuf, JSON, OpenAPI, GraphQL, AsyncAPI"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"Avro, Protobuf"})]}),(0,s.jsxs)("tr",{className:"border-b border-border/20",children:[(0,s.jsx)("td",{className:"px-3 py-2 font-mono text-sky-400",children:"Compatibility API"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-300",children:"BACKWARD / FORWARD / FULL / NONE (+transitive)"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"Confluent-compatible (drop-in)"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"DISALLOWED / BACKWARD / FORWARD / FULL"})]}),(0,s.jsxs)("tr",{className:"border-b border-border/20",children:[(0,s.jsx)("td",{className:"px-3 py-2 font-mono text-amber-400",children:"REST API"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-300",children:"Original (2014+)"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"Confluent-compatible + native"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"Glue API (not REST-equivalent)"})]}),(0,s.jsxs)("tr",{className:"border-b border-border/20",children:[(0,s.jsx)("td",{className:"px-3 py-2 font-mono text-rose-400",children:"Auth"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-300",children:"Basic + mTLS"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"Basic + OAuth2 + mTLS"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"IAM (cross-account)"})]}),(0,s.jsxs)("tr",{className:"border-b border-border/20",children:[(0,s.jsx)("td",{className:"px-3 py-2 font-mono text-fuchsia-400",children:"Best fit"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-300",children:"Kafka-native stacks"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"Multi-protocol (Kafka + REST + gRPC)"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"AWS-native (Kinesis + MSK)"})]}),(0,s.jsxs)("tr",{className:"border-b border-border/20",children:[(0,s.jsx)("td",{className:"px-3 py-2 font-mono text-cyan-400",children:"CNCF status"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-300",children:"— (commercial)"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"CNCF sandbox (2023)"}),(0,s.jsx)("td",{className:"px-3 py-2 text-zinc-400",children:"— (AWS managed)"})]})]})]})})}),(0,s.jsx)(o.iv,{title:"ConceptCard #53 — Schema Registry (click to expand all 5 layers)",description:"The actual interactive ConceptCard component. Click the card header to expand: Layer 1 Math (LaTeX), Layer 2 Code (multi-language), Layer 3 Tools (3-vendor comparison), Layer 4 Analysis (Pyodide runnable), Layer 4.5 Interactive demo (Schema Evolution Visualizer), Layer 5 Visualization (chart).",icon:(0,s.jsx)(S.A,{className:"h-5 w-5"}),badge:"5-layer pattern",contentClassName:"p-4 md:p-5",children:(0,s.jsx)(n.j,{spec:c.EI})}),(0,s.jsxs)(v.S,{pageTitle:"Schema Registry Deep Dive",children:[(0,s.jsx)(v.P,{title:"Schema Registry IS API versioning applied to data — same compatibility invariants govern Kafka Avro, gRPC Protobuf, dbt contracts, and REST API JSON Schema",connectedTo:"ADR-001 (platform architecture)",children:(0,s.jsx)("p",{children:"Schema Registry is structurally API versioning applied to data. The same BACKWARD / FORWARD / FULL / BREAKING invariants that govern REST API evolution (gRPC Protobuf, OpenAPI, JSON Schema) govern Avro schema evolution on Kafka, dbt model contracts (since v1.5), and Great Expectations expectations. The pattern is invariant: every change is classified as compatible or breaking; compatible changes ship without coordination; breaking changes require blue-green or rollback. A Kafka Avro consumer, a gRPC client, a dbt model contract, and a REST API caller all benefit from the SAME compatibility checker math — the math says: BACKWARD if S_{n+1} ⊇ S_n (new reader reads old data), FORWARD if S_n ⊇ S_{n+1} (old reader reads new data), FULL if both, BREAKING if no valid transformation f exists. The only difference is the substrate (Kafka topic vs Protobuf descriptor vs dbt YAML vs OpenAPI spec) — the math is universal. Confluent Schema Registry, Apicurio Registry, AWS Glue Schema Registry, gRPC Protobuf, dbt contracts, and OpenAPI specs all converge on the same invariants because they're all solving the same problem: how to evolve a contract without breaking consumers."})}),(0,s.jsx)(v.P,{title:"Avro vs Protobuf vs JSON Schema — the same tradeoff at different layers",connectedTo:"ADR-050 (fold-section architecture)",children:(0,s.jsx)("p",{children:"The three wire formats (Avro, Protobuf, JSON Schema) make the same tradeoff at different layers of the stack. Avro is schema-first + binary: the schema lives in the registry, the message carries only a 4-byte ID, the payload is compact binary. Protobuf is schema-first + tag-numbered: the schema is the .proto file, fields are numbered (adding a new field with a new tag is forward-compatible), the payload is binary but self-describing enough to skip unknown fields. JSON Schema is schema-optional + text: the schema is a validator, the message is human-readable JSON, types are weaker (no native int64, no required-by-default). The tradeoff: Avro is the most compact (best for Kafka data plane) but requires the registry at read time. Protobuf is moderately compact (best for gRPC microservices) and self-describing enough that schema mismatches don't break decoding. JSON Schema is the most flexible (best for REST APIs) but the most verbose. A Kafka engineer using Avro, a microservices engineer using Protobuf, and an API designer using JSON Schema all enforce the same BACKWARD/FORWARD/FULL/BREAKING invariants — only the wire format differs. The choice of wire format is a layer-of-the-stack decision: data plane (Avro), service plane (Protobuf), API plane (JSON Schema). Schema Registry applies the same compatibility math to all three."})})]}),(0,s.jsx)(p.a,{topics:[{id:"streaming",reason:"Streaming — the broader Kafka/Avro context (Phase 2 Ingestion)"},{id:"kafka",reason:"Apache Kafka — the broker that ships Avro records with schema IDs (Phase 2)"},{id:"schema-registry",reason:"Schema Registry introductory page (Phase 2 Ingestion) — this deep-dive complements it"},{id:"data-contracts",reason:"Data contracts — the consumer-producer contract that schema registry enforces (Phase 4)"},{id:"dbt-deep-dive",reason:"dbt model contracts — same compatibility invariants applied to transformation (Phase 4)"},{id:"great-expectations",reason:"Great Expectations — same invariants applied at the read boundary (Phase 5)"},{id:"governance",reason:"Governance — Unity Catalog + RBAC + lineage that the schema registry feeds (Phase 7)"},{id:"catalogs",reason:"Catalogs — Unity Catalog and Iceberg catalogs that depend on schema metadata (Phase 3)"}]}),(0,s.jsx)(d.R,{pageId:"schema-registry-deep-dive"}),(0,s.jsx)(m.B,{pageId:"schema-registry-deep-dive"}),(0,s.jsx)(l.T,{relatedPages:[{id:"schema-registry",reason:"Start with the Phase 2 introductory Schema Registry page (Kafka integration)"},{id:"data-contracts",reason:"Phase 4: data contracts — the social contract schema registry enforces"},{id:"streaming",reason:"Phase 2: streaming — the broader Kafka + Avro context"}]}),(0,s.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,s.jsx)(i(),{href:(0,u.ZJ)("schema-registry"),className:"text-sm text-primary hover:underline",children:"→ Schema Registry (Phase 2 introductory)"}),(0,s.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,s.jsx)(i(),{href:(0,u.ZJ)("data-contracts"),className:"text-sm text-primary hover:underline",children:"→ Data Contracts (Phase 4)"}),(0,s.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,s.jsx)(i(),{href:(0,u.ZJ)("streaming"),className:"text-sm text-primary hover:underline",children:"→ Streaming (Phase 2)"}),(0,s.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,s.jsx)(i(),{href:(0,u.ZJ)("connections"),className:"text-sm text-primary hover:underline",children:"→ Connections (cross-platform math graph)"})]})]})}},48106:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(6404).A)("hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]])},58411:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(6404).A)("git-merge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]])},89464:(e,t,a)=>{Promise.resolve().then(a.bind(a,14632))}},e=>{e.O(0,[6919,8500,9430,3493,9760,7591,6012,9237,4843,8656,9620,6722,5404,9275,2194,663,7069,5041,6446,8441,3794,7358],()=>e(e.s=89464)),_N_E=e.O()}]);