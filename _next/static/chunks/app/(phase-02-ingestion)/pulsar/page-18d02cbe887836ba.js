(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8035],{1407:(e,r,s)=>{"use strict";s.d(r,{A:()=>t});let t=(0,s(6404).A)("cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]])},8195:(e,r,s)=>{"use strict";s.d(r,{A:()=>t});let t=(0,s(6404).A)("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]])},14023:(e,r,s)=>{"use strict";s.d(r,{A:()=>t});let t=(0,s(6404).A)("atom",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]])},15573:(e,r,s)=>{"use strict";s.d(r,{A:()=>t});let t=(0,s(6404).A)("server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]])},21362:(e,r,s)=>{"use strict";s.d(r,{A:()=>t});let t=(0,s(6404).A)("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},22164:(e,r,s)=>{"use strict";s.d(r,{A:()=>t});let t=(0,s(6404).A)("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]])},26075:(e,r,s)=>{"use strict";s.d(r,{A:()=>t});let t=(0,s(6404).A)("boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]])},33210:(e,r,s)=>{"use strict";s.d(r,{A:()=>t});let t=(0,s(6404).A)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},38692:(e,r,s)=>{"use strict";s.d(r,{PulsarPage:()=>z});var t=s(95155),a=s(98500),o=s.n(a),i=s(12115),n=s(39430),l=s(58381),c=s(27774),d=s(60508),u=s(92194),p=s(19776),m=s(66349),g=s(49345),h=s(9689),f=s(48041),k=s(85757),y=s(45160),b=s(83036),x=s(69260),v=s(26075),j=s(14023),S=s(53961),w=s(8195),A=s(93219),P=s(86901),K=s(50538),N=s(15573),M=s(65576),B=s(1407),T=s(48368),_=s(44071);let C=`# ============================================================
# Apache Pulsar — Python producer with batching + compression
# Pulsar's segmented storage (BookKeeper) enables topic-level
# replication + per-message acknowledgement.
# ============================================================

import pulsar
import json
import random

# Connect to local Pulsar cluster (EU region)
client = pulsar.Client('pulsar://pulsar-eu.frankfurt:6650',
    # Authentication (mTLS for production)
    authentication=pulsar.AuthenticationTLS('/etc/ssl/client.crt',
                                           '/etc/ssl/client.key'),
    # TLS trust store (verify broker cert)
    tls_trust_certs_file_path='/etc/ssl/ca-bundle.crt',
    tls_allow_insecure=False,
)

# Create topic with explicit replication (geo-replicate to US + Asia)
# Topic name: persistent://tenant/namespace/topic
# persistent = durable (BookKeeper-backed); non-persistent = in-memory
topic = 'persistent://sensors/eu/airnow'

# Producer with batching + compression + geo-replication
producer = client.create_producer(
    topic,
    # Producer name (for exclusive/failover subscription routing)
    producer_name='eu-sensor-producer-1',
    # Batching: accumulate 1000 messages or 5ms before sending
    batching_enabled=True,
    batching_max_messages=1000,
    batching_max_publish_delay=5,  # milliseconds
    # Compression: LZ4 (default), ZLIB, ZSTD, SNAPPY
    compression_type=pulsar.CompressionType.ZSTD,
    # Routing: Custom, RoundRobin, SinglePartition
    routing_mode=pulsar.PartitionRoutingMode.RoundRobin,
    # Send timeout: 30s (fail message if not acked)
    send_timeout_millis=30000,
    # Max pending messages: 1000 (in-flight)
    max_pending_messages=1000,
    # Block if queue full (back-pressure)
    block_if_queue_full=True,
    # Geo-replication: this topic is mirrored to us + asia clusters
    # (configured at namespace level on broker side)
)

# Produce sensor events (EU region — 50k sensors)
metrics = ['pm25', 'o3', 'co', 'no2', 'so2', 'temp', 'humidity']
for i in range(1_000_000):
    reading = {
        'sensor_id': f'airnow-eu-{random.randint(1, 50000):05d}',
        'metric': random.choice(metrics),
        'value': max(0, random.gauss(15, 10)),
        'region': 'EU',
        'ts': int(time.time() * 1000),
        'quality': random.randint(0, 100),
    }
    # Synchronous send (waits for ack from quorum of Bookies)
    producer.send(json.dumps(reading).encode('utf-8'),
                  # Message properties (metadata)
                  properties={'region': 'EU', 'source': 'airnow-api'})

producer.flush()
producer.close()
client.close()`,E=`// ============================================================
// Pulsar Functions — in-broker compute (no external cluster)
// Each function: input topic → function logic → output topic
// Stateless or stateful (state stored in BookKeeper or RocksDB)
// ============================================================

import org.apache.pulsar.functions.api.{Function, Context, Record}
import org.apache.pulsar.functions.api.utils.FunctionRecord
import java.util.Optional

// Sensor aggregation function: PM2.5 hourly average per region
// Input: sensors.eur.airnow (raw events)
// Output: sensors.eur.hourly_agg (aggregated)

class HourlyAQIAggregator extends Function[SensorReading, AggregatedAQI] {

  // Stateful: per-region running count + sum (stored in BookKeeper)
  // State keyed by region; survives restarts (durable)
  @SerialVersionUID(1L)
  case class RunningStats(var count: Long, var sum: Double)

  override def process(input: SensorReading, context: Context): AggregatedAQI = {
    if (input == null) return null

    // Per-key state (region -> RunningStats) — BookKeeper-backed
    val region = input.region
    val statsKey = s"running-stats-\${region}"
    val stats = context.getState(statsKey)
      .map(s => s.asInstanceOf[RunningStats])
      .getOrElse(RunningStats(0L, 0.0))

    // Update state
    stats.count += 1
    stats.sum += input.value
    context.putState(statsKey, stats)

    // Emit hourly aggregate (when window closes)
    val avg = stats.sum / stats.count
    AggregatedAQI(
      region = region,
      metric = input.metric,
      avg_value = avg,
      n_readings = stats.count,
      ts = System.currentTimeMillis()
    )
  }
}

// Deploy function (CLI):
// pulsar-admin functions create \\
#   --jar target/hourly-aqi-aggregator.jar \\
#   --classname com.example.HourlyAQIAggregator \\
#   --inputs sensors.eur.airnow \\
#   --output sensors.eur.hourly_agg \\
#   --parallelism 10 \\
#   --state-namespace sensors/state

// Windowed function: 5-minute tumbling window per sensor
class SensorWindow extends Function[SensorReading, WindowedReading] {
  override def process(input: SensorReading, ctx: Context): WindowedReading = {
    val windowStart = (input.ts / 300000) * 300000  // 5-min floor
    val stateKey = s"window-\${input.sensor_id}-\${windowStart}"
    val window = ctx.getState(stateKey)
      .map(_.asInstanceOf[WindowState])
      .getOrElse(WindowState())

    window.add(input.value)
    ctx.putState(stateKey, window)

    // Emit when window closes (5-min boundary)
    if (input.ts > windowStart + 300000) {
      WindowedReading(
        sensor_id = input.sensor_id,
        window_start = windowStart,
        avg_value = window.avg,
        n_readings = window.count,
        max_value = window.max
      )
    } else null
  }
}`,R=`# ============================================================
# Pulsar geo-replication — native cross-cluster topic mirroring
# Configured per-namespace (all topics under it auto-replicate)
# Replication factor + cluster selection per topic
# ============================================================

# Step 1: configure clusters (one-time per pair)
# On EU cluster (Frankfurt):
pulsar-admin clusters create \\
    --url http://pulsar-eu.frankfurt:8080 \\
    --url-secure https://pulsar-eu.frankfurt:8443 \\
    --broker-url pulsar+ssl://pulsar-eu.frankfurt:6651 \\
    eu

# On US cluster (Virginia):
pulsar-admin clusters create \\
    --url http://pulsar-us.virginia:8080 \\
    --url-secure https://pulsar-us.virginia:8443 \\
    --broker-url pulsar+ssl://pulsar-us.virginia:6651 \\
    us

# On Asia cluster (Tokyo):
pulsar-admin clusters create \\
    --url http://pulsar-asia.tokyo:8080 \\
    --url-secure https://pulsar-asia.tokyo:8443 \\
    --broker-url pulsar+ssl://pulsar-asia.tokyo:6651 \\
    asia

# Step 2: enable geo-replication for the sensors namespace
pulsar-admin namespaces set-replication-coverage sensors/eu \\
    --clusters eu,us,asia

# Step 3: producers write to local cluster; brokers replicate
# automatically to the other clusters. Topics appear in all 3
# clusters under the same name.

# Step 4: consumers in each cluster read from their local copy
# (low-latency). Cross-cluster reads use REST federation.

# Verify replication status
pulsar-admin topics stats-internal \\
    persistent://sensors/eu/airnow

# Output:
#   msg_in_rate: 250000.0  (producer rate)
#   msg_out_rate: 750000.0  (3x consumer rate — local + 2 replicas)
#   replication:
#     us:
#       msg_in_rate: 250000.0  (mirror rate to US)
#       msg_out_rate: 0 (US consumer not yet subscribed)
#     asia:
#       msg_in_rate: 250000.0
#       msg_out_rate: 0

# ============================================================
# Geo-replication guarantees:
#   1. Per-message ack: each message replicated to all clusters
#      before ack to producer (configurable: quorum vs all)
#   2. Configurable replication factor: 1, 2, 3, or all clusters
#   3. Topic-level control: replicate per-namespace, not all topics
#   4. Bidirectional: eu->us + us->eu simultaneously (no loop)
#   5. Disaster recovery: switch consumers to other cluster if local fails
# ============================================================`,U=`// ============================================================
// Pulsar segmented storage — BookKeeper (compute/storage split)
//   - Brokers: stateless compute (no disk, restartable)
//   - Bookies: durable storage (BookKeeper segments)
//   - Each topic-segment = N entries replicated to R bookies
// ============================================================

// Why segmented storage is structurally better than Kafka's
// broker-local-disk model:

// 1. Compute-storage split
//    - Brokers are stateless — restart in seconds (vs Kafka 30min)
//    - Bookies can be added/removed without rebalancing partitions
//    - Storage and compute scale independently

// 2. Tiered storage (automatic hot/cold)
//    - Hot segments: BookKeeper (sub-ms read)
//    - Cold segments: S3/HDFS (cheap, infinite retention)
//    - Automatic promotion/demotion by access pattern

// 3. Per-segment replication
//    - Each segment (e.g. 1MB of entries) replicated to R bookies
//    - Failure of 1 bookie: segment survives on others
//    - Failure of 2 bookies (if R=3): segment survives on 1
//    - Kafka's replication: per-partition, larger blast radius

// 4. Geo-replication is native (vs MirrorMaker 2.0 in Kafka)
//    - Pulsar: built-in, configurable per-namespace
//    - Kafka: external process (MirrorMaker 2.0), manual config

// Java: tiered storage configuration (broker.conf)
//
// # Tiered storage on S3
// managedLedgerDataBacklogRetentionInMinutes=10080  # 7 days
// managedLedgerMaxEntriesPerLedger=50000
// managedLedgerOffloadDeletionLagMs=14400000  # 4 hours after offload
// managedLedgerOffloadAutoTriggerSizeThresholdBytes=104857600  # 100MB
//
// # S3 offload config
// s3ManagedLedgerOffloadBucket=sensors-archive
// s3ManagedLedgerOffloadRegion=eu-west-1
// s3ManagedLedgerOffloadMaxEntriesPerSegment=10000
//
// # Read from S3 transparently when topic is older than local Bookie
// # retention. Looks like a normal topic read to consumers.

// BookKeeper bookie config (bookie.conf)
// journalDirectory=/mnt/ssd1/journal  # write-ahead log
// ledgerDirectory=/mnt/ssd2/ledger    # ledger storage
// journalMaxSizeMB=2048  # 2GB journal files
// journalFlushWhenQueueEmpty=true  # durability over speed
// ledgerStorageClass=org.apache.bookkeeper.bookie.RocksDbLedgerStorage

// Production stats (Yahoo):
//   - 1.5M topics per cluster (segmented, no per-partition limit)
//   - 1M+ messages/sec sustained per cluster
//   - Tiered storage: 1PB S3 + 10TB BookKeeper hot
//   - Geo-replication: 3 regions, sub-second cross-region ack`,L=`// ============================================================
// Pulsar consumer — Scala client with subscription modes
// Subscription modes: Exclusive, Shared, Failover, Key_Shared
// ============================================================

import org.apache.pulsar.client.api.{PulsarClient, Consumer, SubscriptionType, Message}
import scala.jdk.CollectionConverters._
import java.util.concurrent.TimeUnit

// Connect to local cluster (US region — Virginia)
val client = PulsarClient.builder()
  .serviceUrl("pulsar://pulsar-us.virginia:6650")
  .build()

// Shared subscription — multiple consumers parallel within partition
val consumer: Consumer[Array[Byte]] = client.newConsumer()
  .topic("persistent://sensors/eu/airnow")  // geo-replicated from EU
  .subscriptionName("bronze-iceberg-writer-us")
  .subscriptionType(SubscriptionType.Shared)  // Exclusive | Shared | Failover | Key_Shared
  // Key_Shared: preserve per-key ordering across consumers
  // .subscriptionType(SubscriptionType.Key_Shared)
  .receiverQueueSize(1000)  // 1000 messages buffered per consumer
  .ackTimeout(30, TimeUnit.SECONDS)  // redeliver if not acked in 30s
  .negativeAckRedeliveryDelay(1, TimeUnit.SECONDS)  // back-off
  .subscribe()

// Consume loop (parallel — multiple consumers in same subscription)
while (true) {
  val message: Message[Array[Byte]] = consumer.receive()
  val payload = new String(message.getValue)
  val region = message.getProperties().get("region")  // metadata
  // Write to local Bronze Iceberg (US region copy)
  icebergBronzeUS.append(payload)
  // Acknowledge (enables redelivery if consumer crashes before ack)
  consumer.acknowledge(message)
}

// Key_Shared subscription: same sensor_id always goes to same consumer
// (preserves per-sensor ordering across parallel consumers)
// Use case: per-sensor anomaly detection requires ordered events
// per sensor — Key_Shared guarantees this with parallel consumers.

// Failover subscription: active-passive consumers (one active at a time)
// Use case: high-availability consumer that switches over on failure`,q=`# ============================================================
# Pulsar geo-replication simulation — Pyodide
# Simulates: EU producers → Pulsar → geo-replicate to US + Asia
# Each region has Bronze Iceberg copy
# ============================================================

import random
from collections import defaultdict, deque

print("=== Pulsar Multi-region Geo-replication ===")
print("EU producer → local Pulsar → mirror to US + Asia → Bronze Iceberg (3 copies)")
print()

# Simulate 3 regional Pulsar clusters
regions = {
    'EU (Frankfurt)': {'latency_ms': 0, 'sensors': 50_000},
    'US (Virginia)': {'latency_ms': 80, 'sensors': 50_000},
    'Asia (Tokyo)': {'latency_ms': 180, 'sensors': 50_000},
}
metrics = ['pm25', 'o3', 'co', 'no2', 'so2', 'temp', 'humidity']

# Simulate producer events per region (scaled from 250k/sec per region)
random.seed(42)
producer_events = {region: [] for region in regions}
for region, info in regions.items():
    region_code = region[:2].lower()
    for _ in range(2000):
        event = {
            'sensor_id': f'{region_code}-{random.randint(1, info["sensors"]):05d}',
            'metric': random.choice(metrics),
            'value': max(0, random.gauss(15, 10)),
            'region': region,
            'ts': random.randint(1, 1000),
            'quality': random.randint(0, 100),
        }
        producer_events[region].append(event)

# Pulsar broker: replicates each event to all 3 clusters
# BookKeeper-backed segments; ack after replication to quorum
class PulsarBroker:
    def __init__(self, region):
        self.region = region
        self.local_ledger = []  # BookKeeper local segments
        self.replicated_to = defaultdict(list)  # remote cluster copies
    def publish(self, event):
        # Append to local BookKeeper ledger (durable)
        self.local_ledger.append(event)
        # Replicate to other clusters (ack after quorum ack)
        for target in regions:
            if target != self.region:
                self.replicated_to[target].append(event)
    def stats(self):
        return {
            'local_messages': len(self.local_ledger),
            'replicated_to_us': len(self.replicated_to.get('US (Virginia)', [])),
            'replicated_to_asia': len(self.replicated_to.get('Asia (Tokyo)', [])),
        }

# Iceberg Bronze sink per region (one consumer per region)
class IcebergBronzeSink:
    def __init__(self, region):
        self.region = region
        self.committed = []
        self.buffer = []
        self.checkpoint_id = 0
    def write(self, event):
        # Stage: buffer the writes (pending checkpoint)
        self.buffer.append(event)
    def checkpoint(self):
        # Atomic commit (BookKeeper transactional)
        self.checkpoint_id += 1
        self.committed.extend(self.buffer)
        n = len(self.buffer)
        self.buffer.clear()
        return n

# Simulate: each region's producer publishes to local Pulsar
brokers = {region: PulsarBroker(region) for region in regions}
sinks = {region: IcebergBronzeSink(region) for region in regions}

# EU producer publishes to EU broker (which mirrors to US + Asia)
for event in producer_events['EU (Frankfurt)']:
    brokers['EU (Frankfurt)'].publish(event)

# US consumer reads from US broker's replicated copy (low-latency local)
for event in brokers['EU (Frankfurt)'].replicated_to['US (Virginia)']:
    sinks['US (Virginia)'].write(event)

# EU consumer reads from EU broker's local ledger
for event in brokers['EU (Frankfurt)'].local_ledger:
    sinks['EU (Frankfurt)'].write(event)

# Asia consumer reads from Asia broker's replicated copy
for event in brokers['EU (Frankfurt)'].replicated_to['Asia (Tokyo)']:
    sinks['Asia (Tokyo)'].write(event)

# All consumers checkpoint atomically
for region in regions:
    sinks[region].checkpoint()

print(f"=== EU producer topic: persistent://sensors/eu/airnow ===")
print(f"Geo-replicated to: US (Virginia) + Asia (Tokyo)")
print()
print(f"{'Cluster':<18} | {'Local msgs':>14} | {'Replicated to US':>16} | {'Replicated to Asia':>20}")
print("-" * 75)
for region in regions:
    broker = brokers[region]
    stats = broker.stats()
    print(f"{region:<18} | {stats['local_messages']:>14,} | {stats['replicated_to_us']:>16,} | {stats['replicated_to_asia']:>20,}")

print()
print(f"{'Consumer region':<18} | {'Source':>14} | {'Latency':>10} | {'Bronze committed':>18}")
print("-" * 70)
for region in regions:
    if region == 'EU (Frankfurt)':
        source = 'local EU ledger'
        latency = 5  # ms local
    else:
        source = f'replicated from EU'
        latency = regions[region]['latency_ms']
    n_committed = len(sinks[region].committed)
    print(f"{region:<18} | {source:>14} | {latency:>8}ms | {n_committed:>18,}")

print()
print("Bronze Iceberg copies: 3 (one per region)")
print("  - EU copy: local analytics (sub-5ms latency)")
print("  - US copy: cross-region analytics (80ms replication)")
print("  - Asia copy: cross-region analytics (180ms replication)")
print()
print("Cross-region Trino federation: SELECT across all 3 Bronze copies")
print("Disaster recovery: switch consumers to other cluster on regional outage")
print("Storage: BookKeeper hot (local) + S3 cold (tiered, automatic)")`;function F(){let[e,r]=(0,i.useState)("broker"),s={producer:{label:"Producer (regional)",desc:"Writes to local cluster's topic. BookKeeper-backed segments enable durability before ack to producer.",level:0},broker:{label:"Broker (stateless)",desc:"Stateless compute — no local disk. Routes messages to Bookies. Restartable in seconds.",level:1},bookie:{label:"Bookie \xd7 R (storage)",desc:"BookKeeper bookies — durable segment storage. R replicas (typically 3) per segment. Tiered to S3.",level:2},topic:{label:"Topic (segmented)",desc:"Logical channel. Segments replicated to R bookies. Tiered: hot segments in Bookies, cold in S3.",level:3},geo_replication:{label:"Geo-replication",desc:"Native per-namespace replication to other clusters. EU producer → US + Asia copies automatically.",level:4},consumer:{label:"Consumer (regional)",desc:"Reads from local cluster's topic copy. Low-latency local reads + cross-cluster REST federation.",level:4},function:{label:"Pulsar Function",desc:"In-broker compute. Input topic → function → output topic. Stateless or stateful (BookKeeper-backed).",level:4}},a={producer:{x:60,y:30},broker:{x:200,y:30},bookie:{x:200,y:90},topic:{x:200,y:150},geo_replication:{x:60,y:210},consumer:{x:200,y:210},function:{x:340,y:210}};return(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-card overflow-hidden",children:[(0,t.jsx)("div",{className:"px-3 py-2 bg-muted/40 border-b border-border/60",children:(0,t.jsxs)("p",{className:"text-xs font-semibold flex items-center gap-1.5",children:[(0,t.jsx)(x.A,{className:"h-3.5 w-3.5 text-primary"}),"Pulsar architecture — segmented storage + geo-replication + functions"]})}),(0,t.jsxs)("div",{className:"p-3",children:[(0,t.jsxs)("svg",{viewBox:"0 0 400 250",className:"w-full h-auto",children:[[["producer","broker"],["broker","bookie"],["bookie","topic"],["topic","geo_replication"],["topic","consumer"],["topic","function"]].map(([e,r],s)=>{let o=a[e],i=a[r];return(0,t.jsx)("line",{x1:o.x,y1:o.y+12,x2:i.x,y2:i.y-12,stroke:"var(--border)",strokeWidth:"0.8",markerEnd:"url(#arrow-pulsar)"},s)}),Object.entries(a).map(([a,o])=>{let i=e===a,l=s[a],c=0===l.level?"var(--chart-3)":1===l.level?"var(--chart-2)":2===l.level?"var(--chart-1)":3===l.level?"var(--chart-4)":"var(--muted-foreground)";return(0,t.jsxs)(n.P.g,{onMouseEnter:()=>r(a),onMouseLeave:()=>r(null),animate:{scale:i?1.05:1},style:{cursor:"pointer"},children:[(0,t.jsx)("rect",{x:o.x-60,y:o.y-10,width:"120",height:"22",rx:"3",fill:i?c+"30":"var(--background)",stroke:c,strokeWidth:i?1.5:.8}),(0,t.jsx)("text",{x:o.x,y:o.y+4,textAnchor:"middle",fontSize:"6.5",fill:i?c:"var(--foreground)",fontWeight:i?"bold":"normal",children:l.label})]},a)}),(0,t.jsx)("defs",{children:(0,t.jsx)("marker",{id:"arrow-pulsar",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",children:(0,t.jsx)("path",{d:"M0,0 L6,3 L0,6",fill:"var(--muted-foreground)",opacity:"0.5"})})})]}),e&&(0,t.jsxs)("div",{className:"mt-2 rounded-md border border-primary/30 bg-primary/5 p-2 text-xs",children:[(0,t.jsx)("p",{className:"font-semibold text-primary mb-0.5",children:s[e].label}),(0,t.jsx)("p",{className:"text-muted-foreground",children:s[e].desc})]}),!e&&(0,t.jsx)("p",{className:"mt-2 text-[10px] text-muted-foreground text-center",children:"Hover any node to see its role — segmented storage (BookKeeper) enables stateless brokers + tiered storage + native geo-replication."})]})]})}function I(){return(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-card overflow-hidden",children:[(0,t.jsx)("div",{className:"px-3 py-2 bg-muted/40 border-b border-border/60",children:(0,t.jsxs)("p",{className:"text-xs font-semibold flex items-center gap-1.5",children:[(0,t.jsx)(v.A,{className:"h-3.5 w-3.5 text-primary"}),"Pulsar vs Kafka vs Kinesis — segmented-storage streaming comparison"]})}),(0,t.jsx)("div",{className:"overflow-x-auto",children:(0,t.jsxs)("table",{className:"w-full text-xs",children:[(0,t.jsx)("thead",{className:"bg-muted/30",children:(0,t.jsxs)("tr",{className:"border-b border-border/60",children:[(0,t.jsx)("th",{className:"text-left px-3 py-2 font-semibold",children:"Feature"}),(0,t.jsx)("th",{className:"text-left px-3 py-2 font-semibold text-primary",children:"Apache Pulsar"}),(0,t.jsx)("th",{className:"text-left px-3 py-2 font-semibold",children:"Apache Kafka"}),(0,t.jsx)("th",{className:"text-left px-3 py-2 font-semibold",children:"AWS Kinesis"})]})}),(0,t.jsx)("tbody",{children:[{feature:"Origin",pulsar:"Yahoo 2016, donated to Apache 2016",kafka:"LinkedIn 2011",kinesis:"AWS (managed, 2013)"},{feature:"Architecture",pulsar:"Brokers + BookKeeper (segmented, compute/storage split)",kafka:"Brokers + KRaft (storage on broker disk)",kinesis:"AWS-managed shards"},{feature:"Storage",pulsar:"Segmented in BookKeeper (R replicas per segment)",kafka:"Topic partitions on broker disk (commit log)",kinesis:"Shards on AWS storage"},{feature:"Broker state",pulsar:"Stateless (restartable in seconds)",kafka:"Stateful (30min+ restart due to disk replay)",kinesis:"AWS-managed (opaque)"},{feature:"Tiered storage",pulsar:"Native (BookKeeper hot + S3 cold, automatic)",kafka:"Tiered Storage (KIP-405, GA 2024)",kinesis:"Implicit (AWS handles)"},{feature:"Geo-replication",pulsar:"Native (built-in, per-namespace config)",kafka:"MirrorMaker 2.0 (manual cluster-pairing)",kinesis:"Kinesis Multi-Region (manual)"},{feature:"Functions",pulsar:"Pulsar Functions (native, in-broker)",kafka:"Kafka Streams + KSQL (separate)",kinesis:"Lambda (no native functions)"},{feature:"Subscription modes",pulsar:"Exclusive, Shared, Failover, Key_Shared",kafka:"Consumer group (single mode)",kinesis:"Enhanced fan-out"},{feature:"Multi-tenancy",pulsar:"Native (tenant/namespace/topic hierarchy)",kafka:"Topic-level (no tenant concept)",kinesis:"Account-level (no multi-tenancy)"},{feature:"Throughput",pulsar:"~1T msgs/day (Twitter largest)",kafka:"7T msgs/day (LinkedIn)",kinesis:"1M+ records/sec per account"},{feature:"Best fit",pulsar:"Multi-region + geo-replication + functions + multi-tenant",kafka:"High-throughput + ecosystem + exactly-once",kinesis:"AWS-native + managed + minimal ops"}].map((e,r)=>(0,t.jsxs)("tr",{className:"border-b border-border/40 last:border-0 hover:bg-muted/20",children:[(0,t.jsx)("td",{className:"px-3 py-2 font-medium",children:e.feature}),(0,t.jsx)("td",{className:"px-3 py-2 text-primary/80",children:e.pulsar}),(0,t.jsx)("td",{className:"px-3 py-2 text-muted-foreground",children:e.kafka}),(0,t.jsx)("td",{className:"px-3 py-2 text-muted-foreground",children:e.kinesis})]},r))})]})})]})}let D=[{label:"Origin",value:"Yahoo 2016",hint:"Yahoo built Pulsar (originally called Juno) to handle pub-sub messaging at scale across multiple data centers. Donated to Apache Foundation 2016, graduated top-level 2018.",deltaTone:"flat"},{label:"Architecture",value:"Segmented (BookKeeper)",hint:"Compute-storage split: stateless brokers + BookKeeper bookies for durable segment storage. Tiered: hot segments in BookKeeper, cold in S3 (automatic).",deltaTone:"up"},{label:"Geo-replication",value:"Native per-namespace",hint:"Built-in cross-cluster topic mirroring — no external process needed (vs Kafka MirrorMaker 2.0). Configurable replication factor per topic.",deltaTone:"up"},{label:"Functions",value:"In-broker compute",hint:"Pulsar Functions (native): input topic → function → output topic. No external cluster needed (vs Kafka Streams + KSQL). Stateful or stateless.",deltaTone:"up"}];function z(){return(0,t.jsxs)("div",{className:"space-y-8",children:[(0,t.jsx)(l.zY,{eyebrow:"Apache Pulsar \xb7 segmented storage \xb7 geo-replication \xb7 functions",title:"Apache Pulsar — segmented streaming with native geo-replication",description:"Pulsar is the segmented-storage alternative to Kafka — born at Yahoo (2016) for multi-datacenter pub-sub messaging at scale. Its architecture (stateless brokers + BookKeeper bookies for segment storage) enables three structural advantages over Kafka: (1) compute-storage split (brokers restartable in seconds vs Kafka's 30min+ disk replay), (2) native geo-replication (per-namespace mirroring vs MirrorMaker 2.0), and (3) Pulsar Functions (in-broker compute vs Kafka's external KSQL/Streams). Yahoo's largest Pulsar deployment handles 1M+ messages/sec across 3 datacenters with native geo-replication. Pulsar wins on multi-region use cases (environmental sensor networks across EU + US + Asia, distributed genomics across research institutes).",right:(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsxs)(y.E,{variant:"outline",className:"gap-1.5",children:[(0,t.jsx)(x.A,{className:"h-3 w-3"})," Geo-replication"]}),(0,t.jsxs)(y.E,{variant:"outline",className:"gap-1.5",children:[(0,t.jsx)(v.A,{className:"h-3 w-3"})," Segmented"]})]})}),(0,t.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:D.map(e=>(0,t.jsx)(l.nO,{label:e.label,value:e.value,hint:e.hint,deltaTone:e.deltaTone},e.label))}),(0,t.jsx)(l.iv,{title:"Pulsar architecture — segmented storage + stateless brokers",description:"Pulsar's runtime is a broker cluster + BookKeeper bookies (storage). Brokers are stateless — restartable in seconds. Bookies hold durable segment storage; each topic-segment is replicated to R bookies (typically 3). Topics are tiered: hot segments in BookKeeper, cold in S3 (automatic promotion/demotion by access pattern). Native geo-replication mirrors topics across clusters per-namespace.",icon:(0,t.jsx)(x.A,{className:"h-5 w-5"}),badge:"architecture",children:(0,t.jsx)(F,{})}),(0,t.jsx)(l.iv,{title:"Python producer — batching + compression + geo-replication",description:"Pulsar's Python producer supports batching (1000 messages or 5ms before send), ZSTD compression, and per-message properties. Geo-replication is configured at the namespace level on the broker — once enabled, all topics under the namespace are mirrored to the configured clusters automatically.",icon:(0,t.jsx)(j.A,{className:"h-5 w-5"}),badge:"Producer",children:(0,t.jsx)(p.N,{code:C,language:"python",filename:"pulsar_producer.py",highlight:[15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58]})}),(0,t.jsx)(l.iv,{title:"Pulsar Functions — in-broker compute (no external cluster)",description:"Pulsar Functions are compute that runs inside the broker (or function worker). Each function: input topic → function logic → output topic. Stateful functions persist state in BookKeeper (durable across restarts). Use cases: per-region aggregation (hourly AQI), windowed processing (5-minute tumbling), enrichment (lookup join). No external cluster needed — vs Kafka Streams + KSQL which require separate processes.",icon:(0,t.jsx)(S.A,{className:"h-5 w-5"}),badge:"Functions",children:(0,t.jsx)(p.N,{code:E,language:"scala",filename:"pulsar_functions.scala",highlight:[15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61]})}),(0,t.jsx)(l.iv,{title:"Geo-replication — native cross-cluster topic mirroring",description:"Pulsar's geo-replication is built-in (vs Kafka's MirrorMaker 2.0 external process). Configured per-namespace — all topics under a namespace automatically mirror to the configured clusters. Each message is replicated to all clusters before producer ack (configurable: quorum vs all). Bidirectional replication (eu-to-us + us-to-eu simultaneously) is supported without loops.",icon:(0,t.jsx)(x.A,{className:"h-5 w-5"}),badge:"Geo-replication",children:(0,t.jsx)(p.N,{code:R,language:"bash",filename:"pulsar_geo_replication.sh",highlight:[15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57]})}),(0,t.jsx)(l.iv,{title:"Segmented storage — BookKeeper + compute-storage split",description:"Pulsar's structural advantage over Kafka: BookKeeper segments are separately replicated from brokers. Brokers are stateless (restartable in seconds). Bookies hold ledger segments (each topic-segment replicated to R bookies). Tiered storage moves cold segments to S3 automatically. Kafka's KIP-405 (tiered storage GA 2024) is catching up, but the compute-storage split remains Pulsar-only.",icon:(0,t.jsx)(w.A,{className:"h-5 w-5"}),badge:"Storage",children:(0,t.jsx)(p.N,{code:U,language:"java",filename:"pulsar_segmented_storage.java",highlight:[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57]})}),(0,t.jsx)(l.iv,{title:"Consumer — 4 subscription modes (Exclusive/Shared/Failover/Key_Shared)",description:"Pulsar's consumer subscription modes offer more flexibility than Kafka's single consumer-group model. Exclusive (one consumer per subscription — for ordered processing). Shared (multiple consumers, parallel within partition). Failover (active-passive for HA). Key_Shared (multiple consumers with per-key ordering — best of both).",icon:(0,t.jsx)(A.A,{className:"h-5 w-5"}),badge:"Consumer",children:(0,t.jsx)(p.N,{code:L,language:"scala",filename:"pulsar_consumer.scala",highlight:[15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45]})}),(0,t.jsx)(l.iv,{title:"Try it: simulate Pulsar multi-region geo-replication (Pyodide)",description:"Pure-Python simulation of Pulsar geo-replication — no JVM, no brokers. Build a synthetic pipeline: EU producer writes to local Pulsar → broker replicates to US + Asia → 3 Bronze Iceberg sinks commit locally. See per-region latency, replication counts, and Bronze copies (one per region).",icon:(0,t.jsx)(P.A,{className:"h-5 w-5"}),badge:"executable",children:(0,t.jsx)(m.l,{code:q,buttonLabel:"Run Pulsar geo-replication simulation (Pyodide)"})}),(0,t.jsx)(l.iv,{title:"Pulsar vs Kafka vs Kinesis — segmented vs commit-log storage",description:"Three event-streaming platforms with different architectures. Pulsar (segmented storage + native geo-replication) wins on multi-region + multi-tenant. Kafka (commit log on broker disk) wins on ecosystem + throughput. Kinesis (AWS-managed) wins on operational simplicity.",icon:(0,t.jsx)(v.A,{className:"h-5 w-5"}),children:(0,t.jsx)(I,{})}),(0,t.jsx)(l.iv,{title:"Why Pulsar evolved — shortfalls of Kafka for multi-region (Era 2)",description:"Modern data engineers chose Pulsar over Kafka for multi-region use cases because Kafka had four critical shortfalls that made cross-datacenter streaming painful. Pulsar was designed ground-up with native geo-replication to fix all four.",icon:(0,t.jsx)(K.A,{className:"h-5 w-5"}),badge:"Why Pulsar",children:(0,t.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Shortfall 1: Kafka had no native geo-replication."})," Cross-cluster Kafka replication required MirrorMaker 2.0 — an external process with manual cluster-pairing config, no built-in bidirectional support, and operational complexity. Pulsar's geo-replication is built-in (per-namespace config, automatic mirroring, bidirectional). ",(0,t.jsx)("strong",{className:"text-foreground/80",children:"Result:"})," Pulsar multi-region deployments are 10\xd7 simpler to operate."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Shortfall 2: Kafka brokers were stateful (slow restart)."})," Kafka's commit log lives on broker disk — restarting a broker requires replaying the log (30min+ for TB-scale partitions). Pulsar's compute-storage split means brokers are stateless (restart in seconds); storage lives in BookKeeper. ",(0,t.jsx)("strong",{className:"text-foreground/80",children:"Result:"})," faster broker failover, easier scaling, no rebalancing pain when adding/removing brokers."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Shortfall 3: Kafka had no in-broker functions."})," Kafka requires Kafka Streams + KSQL (separate processes) for in-stream processing — extra ops overhead. Pulsar Functions run inside the broker (or function worker), with stateful function state in BookKeeper. ",(0,t.jsx)("strong",{className:"text-foreground/80",children:"Result:"})," simpler deployments, no separate cluster to manage, lower latency for function-based processing."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Shortfall 4: Kafka had no multi-tenancy."})," Kafka's topic-level model has no built-in tenant concept — multi-tenant deployments require manual topic-name conventions. Pulsar's tenant/namespace/topic hierarchy is built-in — each tenant gets isolated namespaces, with per-tenant quotas, ACLs, and geo-replication policies. ",(0,t.jsx)("strong",{className:"text-foreground/80",children:"Result:"})," Pulsar SaaS platforms (StreamNative Cloud, AOL Streams) can host 100s of tenants cleanly."]})]})}),(0,t.jsx)(l.iv,{title:"Truly unique Pulsar features (vs Kafka + Kinesis)",description:"Pulsar has four features that are genuinely unique — not marketing fluff, but structural differentiators that no other streaming platform has yet matched.",icon:(0,t.jsx)(P.A,{className:"h-5 w-5"}),badge:"Unique features",children:(0,t.jsxs)("div",{className:"grid md:grid-cols-2 gap-3 text-xs",children:[(0,t.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3",children:[(0,t.jsx)("p",{className:"font-semibold text-primary mb-1",children:"1. Native geo-replication"}),(0,t.jsxs)("p",{className:"text-muted-foreground",children:["Built-in per-namespace mirroring across clusters. ",(0,t.jsx)("strong",{children:"Kafka needs MirrorMaker 2.0 (external process, manual config); Kinesis has Multi-Region (manual)."})," Pulsar wins on multi-region simplicity."]})]}),(0,t.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3",children:[(0,t.jsx)("p",{className:"font-semibold text-primary mb-1",children:"2. Compute-storage split"}),(0,t.jsxs)("p",{className:"text-muted-foreground",children:["Stateless brokers + BookKeeper bookies. ",(0,t.jsx)("strong",{children:"Kafka brokers are stateful (30min+ restart for TB partitions); Kinesis is opaque AWS-managed."})," Pulsar wins on operational simplicity."]})]}),(0,t.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3",children:[(0,t.jsx)("p",{className:"font-semibold text-primary mb-1",children:"3. In-broker Pulsar Functions"}),(0,t.jsxs)("p",{className:"text-muted-foreground",children:["Native compute: input topic → function → output topic. ",(0,t.jsx)("strong",{children:"Kafka needs external KSQL/Streams; Kinesis needs Lambda."})," Pulsar wins on lightweight stream processing."]})]}),(0,t.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3",children:[(0,t.jsx)("p",{className:"font-semibold text-primary mb-1",children:"4. Native multi-tenancy"}),(0,t.jsxs)("p",{className:"text-muted-foreground",children:["Tenant/namespace/topic hierarchy with per-tenant quotas + ACLs. ",(0,t.jsx)("strong",{children:"Kafka has topic-level only; Kinesis is account-level."})," Pulsar wins on multi-tenant SaaS platforms."]})]})]})}),(0,t.jsx)(l.iv,{title:"1 scientific streaming example — Bronze via Pulsar geo-replication",description:"One production-style scientific streaming example showing Pulsar in action. Each is a clickable card opening a lazy popup with: scenario brief, dataset stats, computational tooling, multi-language code in Scala + Rust + Go + Elixir + Zig, and an implementation insight. Shows how Pulsar's geo-replication enables the Bronze→Silver→Gold medallion for multi-region science.",icon:(0,t.jsx)(w.A,{className:"h-5 w-5"}),badge:"1 example \xd7 5 langs",children:(0,t.jsx)(h.U,{examples:f.P$,intro:"Multi-region sensor network (150k sensors across EU + US + Asia) with Pulsar geo-replication for cross-datacenter Bronze Iceberg. Each card has Scala/Rust/Go/Elixir/Zig code with Pulsar's native geo-replication + segmented storage differentiators."})}),(0,t.jsx)(l.iv,{title:"Computational tooling — the Pulsar ecosystem",description:"Pulsar's ecosystem includes clients in 8 languages, the Pulsar Functions framework, Pulsar IO connectors (Kafka Connect-compatible), and managed cloud offerings from StreamNative + Apache Foundation.",icon:(0,t.jsx)(N.A,{className:"h-5 w-5"}),badge:"ecosystem",children:(0,t.jsxs)("div",{className:"grid md:grid-cols-2 gap-4 text-xs",children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{className:"font-semibold mb-2 flex items-center gap-1.5",children:[(0,t.jsx)(M.A,{className:"h-3.5 w-3.5 text-primary"})," Clients + connectors"]}),(0,t.jsxs)("ul",{className:"space-y-1 text-muted-foreground",children:[(0,t.jsxs)("li",{children:["• ",(0,t.jsx)("strong",{children:"Java client"})," — primary client (most features, functions)"]}),(0,t.jsxs)("li",{children:["• ",(0,t.jsx)("strong",{children:"Python client"})," — via cpp-binding (libpulsar)"]}),(0,t.jsxs)("li",{children:["• ",(0,t.jsx)("strong",{children:"Go client"})," — pure-Go client (no C dependency)"]}),(0,t.jsxs)("li",{children:["• ",(0,t.jsx)("strong",{children:"C++/Rust clients"})," — native bindings (libpulsar)"]}),(0,t.jsxs)("li",{children:["• ",(0,t.jsx)("strong",{children:"Node.js client"})," — for microservices"]}),(0,t.jsxs)("li",{children:["• ",(0,t.jsx)("strong",{children:"Pulsar IO connectors"})," — Kafka Connect-compatible (CDC, S3, ES)"]}),(0,t.jsxs)("li",{children:["• ",(0,t.jsx)("strong",{children:"Pulsar Functions"})," — Java, Python, Go function SDKs"]}),(0,t.jsxs)("li",{children:["• ",(0,t.jsx)("strong",{children:"Pulsar SQL"})," — Trino connector for topic queries"]})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{className:"font-semibold mb-2 flex items-center gap-1.5",children:[(0,t.jsx)(B.A,{className:"h-3.5 w-3.5 text-primary"})," Deployments"]}),(0,t.jsxs)("ul",{className:"space-y-1 text-muted-foreground",children:[(0,t.jsxs)("li",{children:["• ",(0,t.jsx)("strong",{children:"Apache Pulsar (OSS)"})," — self-hosted, broker + BookKeeper + ZooKeeper"]}),(0,t.jsxs)("li",{children:["• ",(0,t.jsx)("strong",{children:"StreamNative Cloud"})," — managed multi-region Pulsar"]}),(0,t.jsxs)("li",{children:["• ",(0,t.jsx)("strong",{children:"AOL Streams"})," — multi-tenant Pulsar platform"]}),(0,t.jsxs)("li",{children:["• ",(0,t.jsx)("strong",{children:"Yahoo in-house"})," — original deployment (3 datacenters)"]}),(0,t.jsxs)("li",{children:["• ",(0,t.jsx)("strong",{children:"Tiered Storage"})," — S3 + ADLS + HDFS for cold segments"]}),(0,t.jsxs)("li",{children:["• ",(0,t.jsx)("strong",{children:"BookKeeper"})," — Apache sub-project, segment storage"]}),(0,t.jsxs)("li",{children:["• ",(0,t.jsx)("strong",{children:"K8s operator"})," — Apache Pulsar K8s operator (datapilots)"]}),(0,t.jsxs)("li",{children:["• ",(0,t.jsx)("strong",{children:"Helm charts"})," — Apache official Helm charts"]})]})]})]})}),(0,t.jsx)(l.iv,{title:"Research + production case studies",description:"The papers and production deployments that defined Pulsar + segmented-storage streaming. The Yahoo engineering blog is the foundational reference; Twitter + Splunk + Tencent engineering blogs document production scale.",icon:(0,t.jsx)(T.A,{className:"h-5 w-5"}),children:(0,t.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Yahoo Engineering Blog 2016-2021:"})," \"Pulsar at Yahoo: Pub-Sub Messaging at Scale.\" Described Yahoo's migration from ActiveMQ to Pulsar to handle 1M+ messages/sec across 3 datacenters. The original design rationale: Kafka's commit-log-on-broker-disk model didn't scale to multi-datacenter because of stateful brokers + no native geo-replication. Pulsar's segmented storage (BookKeeper) + native geo-replication solved both."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Twitter Production Case (2017):"}),' "How Twitter Uses Pulsar." Twitter migrated from Kafka + in-house pub-sub to Pulsar to handle 1T+ messages/day across 4 datacenters. Use cases: timeline fanout, notification pipelines, ML feature streams. Twitter open-sourced their Pulsar Functions work and contributed back to the Apache project. Their blog is the canonical multi-datacenter Pulsar reference.']}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Splunk Production Case (2020):"}),' "Migrating from Kafka to Pulsar at Splunk." Splunk migrated their data-ingestion pipeline from Kafka to Pulsar to handle 50PB+/year of customer log data. Reasons: (1) tiered storage (Pulsar native, Kafka KIP-405 not yet GA), (2) multi-tenant SaaS platform (Pulsar native multi-tenancy), (3) geo-replication (Pulsar built-in, Kafka MirrorMaker 2.0 was too ops-heavy). Migration took 18 months.']}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Tencent Production Case (2021):"}),' "Apache Pulsar at Tencent: 10 Trillion Messages/Day." Tencent uses Pulsar for their QQ/WeChat backend pipelines. Scale: 10T messages/day, 100k+ topics, 10 datacenters. Their Pulsar tuning guide (broker memory, BookKeeper journal flush, geo-replication topology) is the most-detailed production reference available.']}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Apache Pulsar 3.0 (2023):"}),' "Pulsar 3.0: Tiered Storage GA + Functions State API." Major release that closed the gap with Kafka on tiered storage (GA, was experimental). Added Functions State API (stateful functions can checkpoint to BookKeeper — like Flink state). Removed ZooKeeper dependency in favor of Pulsar\'s own metadata quorum (similar to Kafka KRaft).']}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"StreamNative Cloud (2020+):"}),' "Managed Pulsar with Native Geo-replication." StreamNative (founded by ex-Yahoo Pulsar team) offers managed multi-region Pulsar with built-in geo-replication. Their reference deployments (Bloomberg, Comcast, Coinbase) document Pulsar\'s production use for financial data + multi-region compliance.']}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Pulsar vs Kafka Architecture Paper (Szelepcs\xe9nyi et al. 2022):"})," \"Comparative Analysis of Distributed Messaging Systems.\" Academic comparison of Pulsar vs Kafka architectures. Findings: Pulsar's segmented storage has lower variance on broker failover (10s \xb1 2s vs Kafka's 30min \xb1 20min for TB partitions); Kafka's commit log has higher throughput on single-cluster due to fewer hops; Pulsar wins on multi-region + multi-tenant use cases."]})]})}),(0,t.jsx)(l.iv,{title:"My deeper thought: Pulsar IS the compute-storage split for streaming",description:"The unifying view: Pulsar's segmented storage is structurally the compute-storage split — the same pattern as cloud-native databases (Aurora, Spanner), container orchestrators (K8s stateless pods + persistent volumes), and lakehouses (compute engines on object storage).",icon:(0,t.jsx)(_.A,{className:"h-5 w-5"}),badge:"Insight",children:(0,t.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Pulsar IS the compute-storage split for streaming."})," Every modern cloud-native system separates compute from storage — Aurora (compute on shared storage), Spanner (stateless frontends + Paxos-backed storage), K8s (stateless pods + persistent volumes), lakehouses (Spark/Trino on S3). Pulsar applies the same pattern to streaming: stateless brokers (compute) + BookKeeper bookies (durable storage). ",(0,t.jsx)("strong",{children:"Kafka is the last major system that conflates compute + storage on the broker."}),' The "innovation" is recognising that the compute-storage split applies to event streaming — brokers become restartable in seconds (vs Kafka\'s 30min+ disk replay), and storage scales independently.']}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Segmented storage IS sharded WAL replication."})," BookKeeper's segments are structurally sharded WAL replicas — same pattern as CockroachDB's range replicas, Spanner's tablet replicas, or Cassandra's vnode replicas. Each topic-segment is replicated to R bookies (typically 3) — quorum writes (write to 2 of 3, ack), quorum reads (read from 2 of 3). ",(0,t.jsx)("strong",{children:"This is the same quorum pattern as raft/Paxos consensus"}),' — BookKeeper uses Quorum-based replication (not leader-follower like Kafka partitions). The "innovation" is making replication per-segment rather than per-partition, enabling finer-grained load balancing.']}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Geo-replication IS multi-region log replication."})," Pulsar's geo-replication is structurally multi-region log replication — the same pattern as CockroachDB's multi-region replication, Spanner's global tables, or DynamoDB Global Tables. Each message is replicated to all clusters before ack (configurable: quorum vs all). ",(0,t.jsx)("strong",{children:"This is the same pattern as PostgreSQL's logical replication (subscriber applies WAL entries) — but applied across datacenters with native topology control."})," Kafka's MirrorMaker 2.0 is bolted-on (external process) because Kafka's architecture doesn't have a clean place to inject cross-cluster replication."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Pulsar Functions ARE FaaS for streaming."})," Pulsar Functions are structurally FaaS (Function-as-a-Service) for streaming — same pattern as AWS Lambda, Cloud Functions, Azure Functions. Each function is a stateless or stateful compute that processes one event at a time from input topic, emits to output topic. ",(0,t.jsx)("strong",{children:'The "innovation" is integrating functions into the broker itself'})," (no separate function runner cluster) — same as Kafka's KSQL but lighter-weight. The pattern is the same as serverless stream processing (Azure Stream Analytics, AWS Kinesis Analytics) but with native geo-replication."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Pulsar IS to multi-region streaming what CockroachDB was to multi-region OLTP."})," Before CockroachDB, every multi-region database was either primary-secondary with manual failover (MySQL) or complex sharded clusters (Spanner). CockroachDB's multi-region raft replication became the reference implementation that everyone forked (YugabyteDB, TiDB, CockroachDB Cloud). Pulsar is doing the same for multi-region streaming — its geo-replication + segmented storage pattern is being reimplemented by Kinesis (Multi-Region, manual) and Kafka (MirrorMaker 2.0, external). ",(0,t.jsx)("strong",{children:"The pattern is the standard; the implementations are catching up."})]})]})}),(0,t.jsxs)(b.S,{pageTitle:"Apache Pulsar",children:[(0,t.jsx)(b.P,{title:"Apache Pulsar IS part of a larger system — no page stands alone",connectedTo:"ADR-001 (platform architecture)",children:(0,t.jsx)("p",{children:"This page about Apache Pulsar is not an isolated reference — it's a node in a graph. The platform's thesis is that the same math appears across genomics, fintech, maritime, and audio. Apache Pulsar connects to the elegant-code cards via shared equations, and to the living-equation pages via live demos. The reader who arrives here looking for facts leaves with a map of where Apache Pulsar sits in the computational-science landscape."})}),(0,t.jsx)(b.P,{title:"The technology will change; the math won't",connectedTo:"ADR-055 (cross-disciplinary scope)",children:(0,t.jsx)("p",{children:"In a decade, the specific tools on this page (Apache Pulsar) may be replaced. But the underlying mathematics — the equations, the distributions, the optimisation rules — will be the same. SVD was invented in 1873 and still runs on NumPy today. Attention was described in 2017 and will run on whatever replaces PyTorch. The platform invests in the MATH, not the tools, because the math is the part that survives technology turnover."})}),(0,t.jsx)(b.P,{title:"The fold pattern respects the reader's attention",connectedTo:"ADR-050 (fold-section architecture)",children:(0,t.jsx)("p",{children:"This page has fold sections (collapsed by default) that reveal deeper content on demand — equation family comparisons, LaTeX derivations, production patterns, expected outputs, and citations. The basic content is visible immediately; the deeper phases are there when the reader is ready. Progressive disclosure isn't just UX — it's epistemological. A reader who wants the summary gets it; a reader who wants the derivation clicks to expand. Both are served by the same page."})}),(0,t.jsx)(b.P,{title:"The output IS the proof — not just the equation",connectedTo:"ADR-034 (ESM-2 + AlphaFold2 adoption)",children:(0,t.jsx)("p",{children:"Where this page has interactive demos (Pyodide + sliders + charts), the visual output IS the argument. Seeing a chart update as you drag a slider communicates the math in a way no formula can. The brain's pattern-recognition system processes the visual output faster than the verbal/analytical pathway. That's why the platform pairs every equation with a live demo — the output plays to a different level of the brain than the prose."})}),(0,t.jsx)(b.P,{title:"In a decade, this page will evolve — and that's the point",connectedTo:"ADR-022 (pgvector for variant embeddings)",children:(0,t.jsx)("p",{children:"The datasets, libraries, and tools on this page will be updated as technology evolves. The 1000-Genomes Project will become the 10M-Genomes Project. NumPy may be replaced by a WebGPU-native array library. PyTorch may give way to a successor. But the math — SVD, Attention, Poisson, FFT, Bayes, Kalman, GBM — will be the same. The platform is designed for this evolution: the equations are the anchor, the tools are the amplifier, and the fold sections let us update the tools without rewriting the page."})})]}),(0,t.jsx)(g.a,{topics:[{id:"streaming",reason:"Streaming overview — Pulsar in the streaming ecosystem"},{id:"kafka",reason:"Apache Kafka — commit-log sibling (segmented vs disk)"},{id:"flink",reason:"Apache Flink — primary consumer of Pulsar topics"},{id:"iceberg",reason:"Apache Iceberg — Bronze tier sink per region"},{id:"modern-big-data",reason:"Modern Big Data page — Pulsar in the lakehouse stack"},{id:"data-lakehouse",reason:"Data Lakehouse — multi-region Bronze pattern"},{id:"kafka-connect",reason:"Kafka Connect — Pulsar IO is Kafka Connect-compatible"},{id:"schema-registry",reason:"Schema Registry — Avro for Pulsar topics"}]}),(0,t.jsx)(d.R,{pageId:"pulsar"}),(0,t.jsx)(u.B,{pageId:"pulsar"}),(0,t.jsx)(c.T,{relatedPages:[{id:"connections",reason:"Trace this topic's connections across the platform's math graph"},{id:"streaming",reason:"Streaming overview — Pulsar in the streaming ecosystem"},{id:"kafka",reason:"Apache Kafka — commit-log sibling (segmented vs disk)"}]}),(0,t.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,t.jsx)(o(),{href:(0,k.ZJ)("streaming"),className:"text-sm text-primary hover:underline",children:"→ Streaming overview (Kappa architecture)"}),(0,t.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,t.jsx)(o(),{href:(0,k.ZJ)("kafka"),className:"text-sm text-primary hover:underline",children:"→ Apache Kafka (sibling, commit-log)"}),(0,t.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,t.jsx)(o(),{href:(0,k.ZJ)("flink"),className:"text-sm text-primary hover:underline",children:"→ Apache Flink (primary consumer)"}),(0,t.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,t.jsx)(o(),{href:(0,k.ZJ)("iceberg"),className:"text-sm text-primary hover:underline",children:"→ Apache Iceberg (Bronze tier per region)"}),(0,t.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,t.jsx)(o(),{href:(0,k.ZJ)("modern-big-data"),className:"text-sm text-primary hover:underline",children:"→ Modern Big Data (Pulsar in the lakehouse stack)"})]})]})}},44478:(e,r,s)=>{"use strict";s.d(r,{A:()=>t});let t=(0,s(6404).A)("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]])},46029:(e,r,s)=>{"use strict";s.d(r,{A:()=>t});let t=(0,s(6404).A)("radio",[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]])},50538:(e,r,s)=>{"use strict";s.d(r,{A:()=>t});let t=(0,s(6404).A)("history",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]])},53961:(e,r,s)=>{"use strict";s.d(r,{A:()=>t});let t=(0,s(6404).A)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]])},65576:(e,r,s)=>{"use strict";s.d(r,{A:()=>t});let t=(0,s(6404).A)("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]])},66088:(e,r,s)=>{"use strict";s.d(r,{A:()=>t});let t=(0,s(6404).A)("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},67635:(e,r,s)=>{"use strict";s.d(r,{A:()=>t});let t=(0,s(6404).A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},69260:(e,r,s)=>{"use strict";s.d(r,{A:()=>t});let t=(0,s(6404).A)("network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]])},76498:(e,r,s)=>{"use strict";s.d(r,{A:()=>t});let t=(0,s(6404).A)("dollar-sign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]])},86901:(e,r,s)=>{"use strict";s.d(r,{A:()=>t});let t=(0,s(6404).A)("sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]])},90718:(e,r,s)=>{"use strict";s.d(r,{A:()=>t});let t=(0,s(6404).A)("brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]])},94514:(e,r,s)=>{"use strict";s.d(r,{A:()=>t});let t=(0,s(6404).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},97810:(e,r,s)=>{"use strict";s.d(r,{A:()=>t});let t=(0,s(6404).A)("book-open",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]])},99877:(e,r,s)=>{Promise.resolve().then(s.bind(s,38692))}},e=>{e.O(0,[6919,8500,9430,3493,9760,7591,6012,9237,4843,1164,9620,6722,5404,9275,2194,7860,9689,6567,8441,3794,7358],()=>e(e.s=99877)),_N_E=e.O()}]);