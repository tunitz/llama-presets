// AUTO-GENERATED from llama-server-README.md by scripts/parse-params.ts
// Do not edit by hand. Re-run: bun run parse

export interface LlamaParam {
  id: string;
  primary: string;
  aliases: string[];
  arg?: string;
  description: string;
  extra: string[];
  default?: string;
  env?: string;
  deprecated: boolean;
  section: string;
}

export interface ParamSection {
  id: string;
  title: string;
  count: number;
}

export const sections: ParamSection[] = [
  {
    "id": "common",
    "title": "Common params",
    "count": 82
  },
  {
    "id": "sampling",
    "title": "Sampling params",
    "count": 34
  },
  {
    "id": "server",
    "title": "Server-specific params",
    "count": 139
  }
];

export const params: LlamaParam[] = [
  {
    "id": "help",
    "primary": "--help",
    "aliases": [
      "-h",
      "--usage"
    ],
    "description": "print usage and exit",
    "extra": [],
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "version",
    "primary": "--version",
    "aliases": [],
    "description": "show version and build info",
    "extra": [],
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "cache-list",
    "primary": "--cache-list",
    "aliases": [
      "-cl"
    ],
    "description": "show list of models in cache",
    "extra": [],
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "completion-bash",
    "primary": "--completion-bash",
    "aliases": [],
    "description": "print source-able bash completion script for llama.cpp",
    "extra": [],
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "threads",
    "primary": "--threads",
    "aliases": [
      "-t"
    ],
    "arg": "N",
    "description": "number of CPU threads to use during generation",
    "extra": [],
    "default": "-1",
    "env": "LLAMA_ARG_THREADS",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "threads-batch",
    "primary": "--threads-batch",
    "aliases": [
      "-tb"
    ],
    "arg": "N",
    "description": "number of threads to use during batch and prompt processing",
    "extra": [],
    "default": "same as --threads",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "cpu-mask",
    "primary": "--cpu-mask",
    "aliases": [
      "-C"
    ],
    "arg": "M",
    "description": "CPU affinity mask: arbitrarily long hex. Complements cpu-range",
    "extra": [],
    "default": "\"\"",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "cpu-range",
    "primary": "--cpu-range",
    "aliases": [
      "-Cr"
    ],
    "arg": "lo-hi",
    "description": "range of CPUs for affinity. Complements --cpu-mask",
    "extra": [],
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "cpu-strict",
    "primary": "--cpu-strict",
    "aliases": [],
    "arg": "<0|1>",
    "description": "use strict CPU placement",
    "extra": [],
    "default": "0",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "prio",
    "primary": "--prio",
    "aliases": [],
    "arg": "N",
    "description": "set process/thread priority : low(-1), normal(0), medium(1), high(2), realtime(3)",
    "extra": [],
    "default": "0",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "poll",
    "primary": "--poll",
    "aliases": [],
    "arg": "<0...100>",
    "description": "use polling level to wait for work (0 - no polling, default: 50)",
    "extra": [],
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "cpu-mask-batch",
    "primary": "--cpu-mask-batch",
    "aliases": [
      "-Cb"
    ],
    "arg": "M",
    "description": "CPU affinity mask: arbitrarily long hex. Complements cpu-range-batch",
    "extra": [],
    "default": "same as --cpu-mask",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "cpu-range-batch",
    "primary": "--cpu-range-batch",
    "aliases": [
      "-Crb"
    ],
    "arg": "lo-hi",
    "description": "ranges of CPUs for affinity. Complements --cpu-mask-batch",
    "extra": [],
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "cpu-strict-batch",
    "primary": "--cpu-strict-batch",
    "aliases": [],
    "arg": "<0|1>",
    "description": "use strict CPU placement",
    "extra": [],
    "default": "same as --cpu-strict",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "prio-batch",
    "primary": "--prio-batch",
    "aliases": [],
    "arg": "N",
    "description": "set process/thread priority : 0-normal, 1-medium, 2-high, 3-realtime",
    "extra": [],
    "default": "0",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "poll-batch",
    "primary": "--poll-batch",
    "aliases": [],
    "arg": "<0|1>",
    "description": "use polling to wait for work",
    "extra": [],
    "default": "same as --poll",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "ctx-size",
    "primary": "--ctx-size",
    "aliases": [
      "-c"
    ],
    "arg": "N",
    "description": "size of the prompt context",
    "extra": [],
    "default": "0, 0 = loaded from model",
    "env": "LLAMA_ARG_CTX_SIZE",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "predict",
    "primary": "--predict",
    "aliases": [
      "-n",
      "--n-predict"
    ],
    "arg": "N",
    "description": "number of tokens to predict",
    "extra": [],
    "default": "-1, -1 = infinity",
    "env": "LLAMA_ARG_N_PREDICT",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "batch-size",
    "primary": "--batch-size",
    "aliases": [
      "-b"
    ],
    "arg": "N",
    "description": "logical maximum batch size",
    "extra": [],
    "default": "2048",
    "env": "LLAMA_ARG_BATCH",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "ubatch-size",
    "primary": "--ubatch-size",
    "aliases": [
      "-ub"
    ],
    "arg": "N",
    "description": "physical maximum batch size",
    "extra": [],
    "default": "512",
    "env": "LLAMA_ARG_UBATCH",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "keep",
    "primary": "--keep",
    "aliases": [],
    "arg": "N",
    "description": "number of tokens to keep from the initial prompt",
    "extra": [],
    "default": "0, -1 = all",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "swa-full",
    "primary": "--swa-full",
    "aliases": [],
    "description": "use full-size SWA cache",
    "extra": [],
    "default": "false",
    "env": "LLAMA_ARG_SWA_FULL",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "flash-attn",
    "primary": "--flash-attn",
    "aliases": [
      "-fa"
    ],
    "arg": "[on|off|auto]",
    "description": "set Flash Attention use ('on', 'off', or 'auto', default: 'auto')",
    "extra": [],
    "env": "LLAMA_ARG_FLASH_ATTN",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "perf",
    "primary": "--perf",
    "aliases": [
      "--no-perf"
    ],
    "description": "whether to enable internal libllama performance timings",
    "extra": [],
    "default": "false",
    "env": "LLAMA_ARG_PERF",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "escape",
    "primary": "--escape",
    "aliases": [
      "-e",
      "--no-escape"
    ],
    "description": "whether to process escapes sequences (\\n, \\r, \\t, \\', \\\", \\\\)",
    "extra": [],
    "default": "true",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "rope-scaling",
    "primary": "--rope-scaling",
    "aliases": [],
    "arg": "{none,linear,yarn}",
    "description": "RoPE frequency scaling method, defaults to linear unless specified by the model",
    "extra": [],
    "env": "LLAMA_ARG_ROPE_SCALING_TYPE",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "rope-scale",
    "primary": "--rope-scale",
    "aliases": [],
    "arg": "N",
    "description": "RoPE context scaling factor, expands context by a factor of N",
    "extra": [],
    "env": "LLAMA_ARG_ROPE_SCALE",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "rope-freq-base",
    "primary": "--rope-freq-base",
    "aliases": [],
    "arg": "N",
    "description": "RoPE base frequency, used by NTK-aware scaling",
    "extra": [],
    "default": "loaded from model",
    "env": "LLAMA_ARG_ROPE_FREQ_BASE",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "rope-freq-scale",
    "primary": "--rope-freq-scale",
    "aliases": [],
    "arg": "N",
    "description": "RoPE frequency scaling factor, expands context by a factor of 1/N",
    "extra": [],
    "env": "LLAMA_ARG_ROPE_FREQ_SCALE",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "yarn-orig-ctx",
    "primary": "--yarn-orig-ctx",
    "aliases": [],
    "arg": "N",
    "description": "YaRN: original context size of model",
    "extra": [],
    "default": "0 = model training context size",
    "env": "LLAMA_ARG_YARN_ORIG_CTX",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "yarn-ext-factor",
    "primary": "--yarn-ext-factor",
    "aliases": [],
    "arg": "N",
    "description": "YaRN: extrapolation mix factor",
    "extra": [],
    "default": "-1.00, 0.0 = full interpolation",
    "env": "LLAMA_ARG_YARN_EXT_FACTOR",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "yarn-attn-factor",
    "primary": "--yarn-attn-factor",
    "aliases": [],
    "arg": "N",
    "description": "YaRN: scale sqrt(t) or attention magnitude",
    "extra": [],
    "default": "-1.00",
    "env": "LLAMA_ARG_YARN_ATTN_FACTOR",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "yarn-beta-slow",
    "primary": "--yarn-beta-slow",
    "aliases": [],
    "arg": "N",
    "description": "YaRN: high correction dim or alpha",
    "extra": [],
    "default": "-1.00",
    "env": "LLAMA_ARG_YARN_BETA_SLOW",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "yarn-beta-fast",
    "primary": "--yarn-beta-fast",
    "aliases": [],
    "arg": "N",
    "description": "YaRN: low correction dim or beta",
    "extra": [],
    "default": "-1.00",
    "env": "LLAMA_ARG_YARN_BETA_FAST",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "kv-offload",
    "primary": "--kv-offload",
    "aliases": [
      "-kvo",
      "-nkvo",
      "--no-kv-offload"
    ],
    "description": "whether to enable KV cache offloading",
    "extra": [],
    "default": "enabled",
    "env": "LLAMA_ARG_KV_OFFLOAD",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "repack",
    "primary": "--repack",
    "aliases": [
      "-nr",
      "--no-repack"
    ],
    "description": "whether to enable weight repacking",
    "extra": [],
    "default": "enabled",
    "env": "LLAMA_ARG_REPACK",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "no-host",
    "primary": "--no-host",
    "aliases": [],
    "description": "bypass host buffer allowing extra buffers to be used",
    "extra": [],
    "env": "LLAMA_ARG_NO_HOST",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "cache-type-k",
    "primary": "--cache-type-k",
    "aliases": [
      "-ctk"
    ],
    "arg": "TYPE",
    "description": "KV cache data type for K",
    "extra": [
      "allowed values: f32, f16, bf16, q8_0, q4_0, q4_1, iq4_nl, q5_0, q5_1"
    ],
    "default": "f16",
    "env": "LLAMA_ARG_CACHE_TYPE_K",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "cache-type-v",
    "primary": "--cache-type-v",
    "aliases": [
      "-ctv"
    ],
    "arg": "TYPE",
    "description": "KV cache data type for V",
    "extra": [
      "allowed values: f32, f16, bf16, q8_0, q4_0, q4_1, iq4_nl, q5_0, q5_1"
    ],
    "default": "f16",
    "env": "LLAMA_ARG_CACHE_TYPE_V",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "defrag-thold",
    "primary": "--defrag-thold",
    "aliases": [
      "-dt"
    ],
    "arg": "N",
    "description": "KV cache defragmentation threshold (DEPRECATED)",
    "extra": [],
    "env": "LLAMA_ARG_DEFRAG_THOLD",
    "deprecated": true,
    "section": "common"
  },
  {
    "id": "rpc",
    "primary": "--rpc",
    "aliases": [],
    "arg": "SERVERS",
    "description": "comma-separated list of RPC servers (host:port)",
    "extra": [],
    "env": "LLAMA_ARG_RPC",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "load-mode",
    "primary": "--load-mode",
    "aliases": [
      "-lm"
    ],
    "arg": "MODE",
    "description": "model loading mode",
    "extra": [
      "- auto: mmap, unless a device does not support it",
      "- none: no special loading mode",
      "- mmap: memory-map model (if mmap disabled, slower load but may reduce pageouts if not using mlock)",
      "- mlock: force system to keep model in RAM rather than swapping or compressing",
      "- mmap+mlock: mmap + force system to keep model in RAM rather than swapping or compressing",
      "- dio: use DirectIO if available"
    ],
    "default": "auto",
    "env": "LLAMA_ARG_LOAD_MODE",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "lazy-mode",
    "primary": "--lazy-mode",
    "aliases": [
      "-lzm"
    ],
    "arg": "MODE",
    "description": "on-demand reading of certain tensors, for example per-layer embeddings",
    "extra": [
      "- on: read the rows of such tensors from disk on demand instead of keeping them resident (requires mmap)",
      "- auto: on, but only for tensors larger than 4 GiB",
      "- off: always keep them resident"
    ],
    "default": "auto",
    "env": "LLAMA_ARG_LAZY_MODE",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "numa",
    "primary": "--numa",
    "aliases": [],
    "arg": "TYPE",
    "description": "attempt optimizations that help on some NUMA systems",
    "extra": [
      "- distribute: spread execution evenly over all nodes",
      "- isolate: only spawn threads on CPUs on the node that execution started on",
      "- numactl: use the CPU map provided by numactl",
      "if run without this previously, it is recommended to drop the system page cache before using this",
      "see https://github.com/ggml-org/llama.cpp/issues/1437"
    ],
    "env": "LLAMA_ARG_NUMA",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "device",
    "primary": "--device",
    "aliases": [
      "-dev"
    ],
    "arg": "<dev1,dev2,..>",
    "description": "comma-separated list of devices to use for offloading (none = don't offload)",
    "extra": [
      "use --list-devices to see a list of available devices"
    ],
    "env": "LLAMA_ARG_DEVICE",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "list-devices",
    "primary": "--list-devices",
    "aliases": [],
    "description": "print list of available devices and exit",
    "extra": [],
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "override-tensor",
    "primary": "--override-tensor",
    "aliases": [
      "-ot"
    ],
    "arg": "<tensor name pattern>=<buffer type>,...",
    "description": "override tensor buffer type",
    "extra": [],
    "env": "LLAMA_ARG_OVERRIDE_TENSOR",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "cpu-moe",
    "primary": "--cpu-moe",
    "aliases": [
      "-cmoe"
    ],
    "description": "keep all Mixture of Experts (MoE) weights in the CPU",
    "extra": [],
    "env": "LLAMA_ARG_CPU_MOE",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "n-cpu-moe",
    "primary": "--n-cpu-moe",
    "aliases": [
      "-ncmoe"
    ],
    "arg": "N",
    "description": "keep the Mixture of Experts (MoE) weights of the first N layers in the CPU",
    "extra": [],
    "env": "LLAMA_ARG_N_CPU_MOE",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "n-cpu-ffn",
    "primary": "--n-cpu-ffn",
    "aliases": [
      "-ncffn"
    ],
    "arg": "N",
    "description": "keep the dense FFN weights of the first N layers in the CPU",
    "extra": [
      "(dense models; for MoE expert weights use --n-cpu-moe)"
    ],
    "env": "LLAMA_ARG_N_CPU_FFN",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "gpu-layers",
    "primary": "--gpu-layers",
    "aliases": [
      "-ngl",
      "--n-gpu-layers"
    ],
    "arg": "N",
    "description": "max. number of layers to store in VRAM, either an exact number, 'auto', or 'all'",
    "extra": [],
    "default": "auto",
    "env": "LLAMA_ARG_N_GPU_LAYERS",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "split-mode",
    "primary": "--split-mode",
    "aliases": [
      "-sm"
    ],
    "arg": "{none,layer,row,tensor}",
    "description": "how to split the model across multiple GPUs, one of:",
    "extra": [
      "- none: use one GPU only",
      "- layer (default): split layers and KV across GPUs (pipelined)",
      "- row: split weight across GPUs by rows (parallelized)",
      "- tensor: split weights and KV across GPUs (parallelized, EXPERIMENTAL)"
    ],
    "env": "LLAMA_ARG_SPLIT_MODE",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "tensor-split",
    "primary": "--tensor-split",
    "aliases": [
      "-ts"
    ],
    "arg": "N0,N1,N2,...",
    "description": "fraction of the model to offload to each GPU, comma-separated list of proportions, e.g. 3,1",
    "extra": [],
    "env": "LLAMA_ARG_TENSOR_SPLIT",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "main-gpu",
    "primary": "--main-gpu",
    "aliases": [
      "-mg"
    ],
    "arg": "INDEX",
    "description": "the GPU to use for the model (with split-mode = none), or for intermediate results and KV (with split-mode = row)",
    "extra": [],
    "default": "0",
    "env": "LLAMA_ARG_MAIN_GPU",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "fit",
    "primary": "--fit",
    "aliases": [
      "-fit"
    ],
    "arg": "[on|off]",
    "description": "whether to adjust unset arguments to fit in device memory ('on' or 'off', default: 'on')",
    "extra": [],
    "env": "LLAMA_ARG_FIT",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "fit-target",
    "primary": "--fit-target",
    "aliases": [
      "-fitt"
    ],
    "arg": "MiB0,MiB1,MiB2,...",
    "description": "target margin per device for --fit, comma-separated list of values, single value is broadcast across all devices, default: 1024",
    "extra": [],
    "env": "LLAMA_ARG_FIT_TARGET",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "fit-ctx",
    "primary": "--fit-ctx",
    "aliases": [
      "-fitc"
    ],
    "arg": "N",
    "description": "minimum ctx size that can be set by --fit option, default: 4096",
    "extra": [],
    "env": "LLAMA_ARG_FIT_CTX",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "check-tensors",
    "primary": "--check-tensors",
    "aliases": [],
    "description": "check model tensor data for invalid values",
    "extra": [],
    "default": "false",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "override-kv",
    "primary": "--override-kv",
    "aliases": [],
    "arg": "KEY=TYPE:VALUE,...",
    "description": "advanced option to override model metadata by key. to specify multiple overrides, either use comma-separated values.",
    "extra": [
      "types: int, float, bool, str. example: --override-kv tokenizer.ggml.add_bos_token=bool:false,tokenizer.ggml.add_eos_token=bool:false"
    ],
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "op-offload",
    "primary": "--op-offload",
    "aliases": [
      "--no-op-offload"
    ],
    "description": "whether to offload host tensor operations to device",
    "extra": [],
    "default": "true",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "lora",
    "primary": "--lora",
    "aliases": [],
    "arg": "FNAME",
    "description": "path to LoRA adapter (use comma-separated values to load multiple adapters)",
    "extra": [],
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "lora-scaled",
    "primary": "--lora-scaled",
    "aliases": [],
    "arg": "FNAME:SCALE,...",
    "description": "path to LoRA adapter with user defined scaling (format: FNAME:SCALE,...)",
    "extra": [
      "note: use comma-separated values"
    ],
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "control-vector",
    "primary": "--control-vector",
    "aliases": [],
    "arg": "FNAME",
    "description": "add a control vector",
    "extra": [
      "note: use comma-separated values to add multiple control vectors"
    ],
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "control-vector-scaled",
    "primary": "--control-vector-scaled",
    "aliases": [],
    "arg": "FNAME:SCALE,...",
    "description": "add a control vector with user defined scaling SCALE",
    "extra": [
      "note: use comma-separated values (format: FNAME:SCALE,...)"
    ],
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "control-vector-layer-range",
    "primary": "--control-vector-layer-range",
    "aliases": [],
    "arg": "START END",
    "description": "layer range to apply the control vector(s) to, start and end inclusive",
    "extra": [],
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "model",
    "primary": "--model",
    "aliases": [
      "-m"
    ],
    "arg": "FNAME",
    "description": "model path to load",
    "extra": [],
    "env": "LLAMA_ARG_MODEL",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "model-url",
    "primary": "--model-url",
    "aliases": [
      "-mu"
    ],
    "arg": "MODEL_URL",
    "description": "model download url",
    "extra": [],
    "default": "unused",
    "env": "LLAMA_ARG_MODEL_URL",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "docker-repo",
    "primary": "--docker-repo",
    "aliases": [
      "-dr"
    ],
    "arg": "[<repo>/]<model>[:quant]",
    "description": "Docker Hub model repository. repo is optional, default to ai/. quant is optional, default to :latest.",
    "extra": [
      "example: gemma3"
    ],
    "default": "unused",
    "env": "LLAMA_ARG_DOCKER_REPO",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "hf-repo",
    "primary": "--hf-repo",
    "aliases": [
      "-hf",
      "-hfr"
    ],
    "arg": "<user>/<model>[:quant]",
    "description": "Hugging Face model repository; quant is optional, case-insensitive, default to Q4_K_M, or falls back to the first file in the repo if Q4_K_M doesn't exist.",
    "extra": [
      "mmproj is also downloaded automatically if available. to disable, add --no-mmproj",
      "example: ggml-org/GLM-4.7-Flash-GGUF:Q4_K_M"
    ],
    "default": "unused",
    "env": "LLAMA_ARG_HF_REPO",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "hf-file",
    "primary": "--hf-file",
    "aliases": [
      "-hff"
    ],
    "arg": "FILE",
    "description": "Hugging Face model file. If specified, it will override the quant in --hf-repo",
    "extra": [],
    "default": "unused",
    "env": "LLAMA_ARG_HF_FILE",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "hf-token",
    "primary": "--hf-token",
    "aliases": [
      "-hft"
    ],
    "arg": "TOKEN",
    "description": "Hugging Face access token",
    "extra": [],
    "default": "value from HF_TOKEN environment variable",
    "env": "HF_TOKEN",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "log-disable",
    "primary": "--log-disable",
    "aliases": [],
    "description": "Log disable",
    "extra": [],
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "log-file",
    "primary": "--log-file",
    "aliases": [],
    "arg": "FNAME",
    "description": "Log to file",
    "extra": [],
    "env": "LLAMA_ARG_LOG_FILE",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "log-jsonl",
    "primary": "--log-jsonl",
    "aliases": [
      "--no-log-jsonl"
    ],
    "description": "Log as JSONL (one JSON object per line) to stdout, this also disables colored logging",
    "extra": [],
    "default": "disabled",
    "env": "LLAMA_ARG_LOG_JSONL",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "log-colors",
    "primary": "--log-colors",
    "aliases": [],
    "arg": "[on|off|auto]",
    "description": "Set colored logging ('on', 'off', or 'auto', default: 'auto')",
    "extra": [
      "'auto' enables colors when output is to a terminal"
    ],
    "env": "LLAMA_ARG_LOG_COLORS",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "verbose",
    "primary": "--verbose",
    "aliases": [
      "-v",
      "--log-verbose"
    ],
    "description": "Set verbosity level to infinity (i.e. log all messages, useful for debugging)",
    "extra": [],
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "offline",
    "primary": "--offline",
    "aliases": [],
    "description": "Offline mode: forces use of cache, prevents network access",
    "extra": [],
    "env": "LLAMA_ARG_OFFLINE",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "verbosity",
    "primary": "--verbosity",
    "aliases": [
      "-lv",
      "--log-verbosity"
    ],
    "arg": "N",
    "description": "Set the verbosity threshold. Messages with a higher verbosity will be ignored. Values:",
    "extra": [
      "- 0: generic output",
      "- 1: error",
      "- 2: warning",
      "- 3: info",
      "- 4: trace (more info)",
      "- 5: debug"
    ],
    "default": "3",
    "env": "LLAMA_ARG_LOG_VERBOSITY",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "log-prefix",
    "primary": "--log-prefix",
    "aliases": [
      "--no-log-prefix"
    ],
    "description": "Enable prefix in log messages",
    "extra": [],
    "env": "LLAMA_ARG_LOG_PREFIX",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "log-timestamps",
    "primary": "--log-timestamps",
    "aliases": [
      "--no-log-timestamps"
    ],
    "description": "Enable timestamps in log messages",
    "extra": [],
    "env": "LLAMA_ARG_LOG_TIMESTAMPS",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "spec-draft-type-k",
    "primary": "--spec-draft-type-k",
    "aliases": [
      "-ctkd",
      "--cache-type-k-draft"
    ],
    "arg": "TYPE",
    "description": "KV cache data type for K for the draft model",
    "extra": [
      "allowed values: f32, f16, bf16, q8_0, q4_0, q4_1, iq4_nl, q5_0, q5_1"
    ],
    "default": "f16",
    "env": "LLAMA_ARG_SPEC_DRAFT_CACHE_TYPE_K",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "spec-draft-type-v",
    "primary": "--spec-draft-type-v",
    "aliases": [
      "-ctvd",
      "--cache-type-v-draft"
    ],
    "arg": "TYPE",
    "description": "KV cache data type for V for the draft model",
    "extra": [
      "allowed values: f32, f16, bf16, q8_0, q4_0, q4_1, iq4_nl, q5_0, q5_1"
    ],
    "default": "f16",
    "env": "LLAMA_ARG_SPEC_DRAFT_CACHE_TYPE_V",
    "deprecated": false,
    "section": "common"
  },
  {
    "id": "samplers",
    "primary": "--samplers",
    "aliases": [],
    "arg": "SAMPLERS",
    "description": "samplers that will be used for generation in the order, separated by ';'",
    "extra": [],
    "default": "penalties;dry;top_n_sigma;top_k;typ_p;top_p;min_p;xtc;temperature",
    "deprecated": false,
    "section": "sampling"
  },
  {
    "id": "seed",
    "primary": "--seed",
    "aliases": [
      "-s"
    ],
    "arg": "SEED",
    "description": "RNG seed",
    "extra": [],
    "default": "-1, use random seed for -1",
    "deprecated": false,
    "section": "sampling"
  },
  {
    "id": "sampler-seq",
    "primary": "--sampler-seq",
    "aliases": [
      "--sampling-seq"
    ],
    "arg": "SEQUENCE",
    "description": "simplified sequence for samplers that will be used",
    "extra": [],
    "default": "edskypmxt",
    "deprecated": false,
    "section": "sampling"
  },
  {
    "id": "ignore-eos",
    "primary": "--ignore-eos",
    "aliases": [],
    "description": "ignore end of stream token and continue generating (implies --logit-bias EOS-inf)",
    "extra": [],
    "deprecated": false,
    "section": "sampling"
  },
  {
    "id": "temp",
    "primary": "--temp",
    "aliases": [
      "--temperature"
    ],
    "arg": "N",
    "description": "temperature",
    "extra": [],
    "default": "0.80",
    "env": "LLAMA_ARG_TEMPERATURE",
    "deprecated": false,
    "section": "sampling"
  },
  {
    "id": "top-k",
    "primary": "--top-k",
    "aliases": [],
    "arg": "N",
    "description": "top-k sampling",
    "extra": [],
    "default": "40, 0 = disabled",
    "env": "LLAMA_ARG_TOP_K",
    "deprecated": false,
    "section": "sampling"
  },
  {
    "id": "top-p",
    "primary": "--top-p",
    "aliases": [],
    "arg": "N",
    "description": "top-p sampling",
    "extra": [],
    "default": "0.95, 1.0 = disabled",
    "env": "LLAMA_ARG_TOP_P",
    "deprecated": false,
    "section": "sampling"
  },
  {
    "id": "min-p",
    "primary": "--min-p",
    "aliases": [],
    "arg": "N",
    "description": "min-p sampling",
    "extra": [],
    "default": "0.05, 0.0 = disabled",
    "env": "LLAMA_ARG_MIN_P",
    "deprecated": false,
    "section": "sampling"
  },
  {
    "id": "top-nsigma",
    "primary": "--top-nsigma",
    "aliases": [
      "--top-n-sigma"
    ],
    "arg": "N",
    "description": "top-n-sigma sampling",
    "extra": [],
    "default": "-1.00, -1.0 = disabled",
    "deprecated": false,
    "section": "sampling"
  },
  {
    "id": "xtc-probability",
    "primary": "--xtc-probability",
    "aliases": [],
    "arg": "N",
    "description": "xtc probability",
    "extra": [],
    "default": "0.00, 0.0 = disabled",
    "deprecated": false,
    "section": "sampling"
  },
  {
    "id": "xtc-threshold",
    "primary": "--xtc-threshold",
    "aliases": [],
    "arg": "N",
    "description": "xtc threshold",
    "extra": [],
    "default": "0.10, 1.0 = disabled",
    "deprecated": false,
    "section": "sampling"
  },
  {
    "id": "typical",
    "primary": "--typical",
    "aliases": [
      "--typical-p"
    ],
    "arg": "N",
    "description": "locally typical sampling, parameter p",
    "extra": [],
    "default": "1.00, 1.0 = disabled",
    "deprecated": false,
    "section": "sampling"
  },
  {
    "id": "repeat-last-n",
    "primary": "--repeat-last-n",
    "aliases": [],
    "arg": "N",
    "description": "last n tokens to consider for penalize",
    "extra": [],
    "default": "64, 0 = disabled",
    "deprecated": false,
    "section": "sampling"
  },
  {
    "id": "repeat-penalty",
    "primary": "--repeat-penalty",
    "aliases": [],
    "arg": "N",
    "description": "penalize repeat sequence of tokens",
    "extra": [],
    "default": "1.00, 1.0 = disabled",
    "env": "LLAMA_ARG_REPEAT_PENALTY",
    "deprecated": false,
    "section": "sampling"
  },
  {
    "id": "presence-penalty",
    "primary": "--presence-penalty",
    "aliases": [],
    "arg": "N",
    "description": "repeat alpha presence penalty",
    "extra": [],
    "default": "0.00, 0.0 = disabled",
    "env": "LLAMA_ARG_PRESENCE_PENALTY",
    "deprecated": false,
    "section": "sampling"
  },
  {
    "id": "frequency-penalty",
    "primary": "--frequency-penalty",
    "aliases": [],
    "arg": "N",
    "description": "repeat alpha frequency penalty",
    "extra": [],
    "default": "0.00, 0.0 = disabled",
    "env": "LLAMA_ARG_FREQUENCY_PENALTY",
    "deprecated": false,
    "section": "sampling"
  },
  {
    "id": "dry-multiplier",
    "primary": "--dry-multiplier",
    "aliases": [],
    "arg": "N",
    "description": "set DRY sampling multiplier",
    "extra": [],
    "default": "0.00, 0.0 = disabled",
    "deprecated": false,
    "section": "sampling"
  },
  {
    "id": "dry-base",
    "primary": "--dry-base",
    "aliases": [],
    "arg": "N",
    "description": "set DRY sampling base value",
    "extra": [],
    "default": "1.75",
    "deprecated": false,
    "section": "sampling"
  },
  {
    "id": "dry-allowed-length",
    "primary": "--dry-allowed-length",
    "aliases": [],
    "arg": "N",
    "description": "set allowed length for DRY sampling",
    "extra": [],
    "default": "2",
    "deprecated": false,
    "section": "sampling"
  },
  {
    "id": "dry-penalty-last-n",
    "primary": "--dry-penalty-last-n",
    "aliases": [],
    "arg": "N",
    "description": "set DRY penalty for the last n tokens",
    "extra": [],
    "default": "64, 0 = disable",
    "deprecated": false,
    "section": "sampling"
  },
  {
    "id": "dry-sequence-breaker",
    "primary": "--dry-sequence-breaker",
    "aliases": [],
    "arg": "STRING",
    "description": "add sequence breaker for DRY sampling, clearing out default breakers ('\\n', ':', '\"', '*') in the process; use \"none\" to not use any sequence breakers",
    "extra": [],
    "deprecated": false,
    "section": "sampling"
  },
  {
    "id": "adaptive-target",
    "primary": "--adaptive-target",
    "aliases": [],
    "arg": "N",
    "description": "adaptive-p: select tokens near this probability (valid range 0.0 to 1.0; negative = disabled)",
    "extra": [],
    "default": "-1.00",
    "deprecated": false,
    "section": "sampling"
  },
  {
    "id": "adaptive-decay",
    "primary": "--adaptive-decay",
    "aliases": [],
    "arg": "N",
    "description": "adaptive-p: decay rate for target adaptation over time. lower values are more reactive, higher values are more stable.",
    "extra": [
      "(valid range 0.0 to 0.99) (default: 0.90)"
    ],
    "deprecated": false,
    "section": "sampling"
  },
  {
    "id": "dynatemp-range",
    "primary": "--dynatemp-range",
    "aliases": [],
    "arg": "N",
    "description": "dynamic temperature range",
    "extra": [],
    "default": "0.00, 0.0 = disabled",
    "deprecated": false,
    "section": "sampling"
  },
  {
    "id": "dynatemp-exp",
    "primary": "--dynatemp-exp",
    "aliases": [],
    "arg": "N",
    "description": "dynamic temperature exponent",
    "extra": [],
    "default": "1.00",
    "deprecated": false,
    "section": "sampling"
  },
  {
    "id": "mirostat",
    "primary": "--mirostat",
    "aliases": [],
    "arg": "N",
    "description": "use Mirostat sampling.",
    "extra": [
      "Top K, Nucleus and Locally Typical samplers are ignored if used."
    ],
    "default": "0, 0 = disabled, 1 = Mirostat, 2 = Mirostat 2.0",
    "deprecated": false,
    "section": "sampling"
  },
  {
    "id": "mirostat-lr",
    "primary": "--mirostat-lr",
    "aliases": [],
    "arg": "N",
    "description": "Mirostat learning rate, parameter eta",
    "extra": [],
    "default": "0.10",
    "deprecated": false,
    "section": "sampling"
  },
  {
    "id": "mirostat-ent",
    "primary": "--mirostat-ent",
    "aliases": [],
    "arg": "N",
    "description": "Mirostat target entropy, parameter tau",
    "extra": [],
    "default": "5.00",
    "deprecated": false,
    "section": "sampling"
  },
  {
    "id": "logit-bias",
    "primary": "--logit-bias",
    "aliases": [
      "-l"
    ],
    "arg": "TOKEN_ID(+/-)BIAS",
    "description": "modifies the likelihood of token appearing in the completion,",
    "extra": [
      "i.e. `--logit-bias 15043+1` to increase likelihood of token ' Hello',",
      "or `--logit-bias 15043-1` to decrease likelihood of token ' Hello'"
    ],
    "deprecated": false,
    "section": "sampling"
  },
  {
    "id": "grammar",
    "primary": "--grammar",
    "aliases": [],
    "arg": "GRAMMAR",
    "description": "BNF-like grammar to constrain generations (see samples in grammars/ dir)",
    "extra": [],
    "deprecated": false,
    "section": "sampling"
  },
  {
    "id": "grammar-file",
    "primary": "--grammar-file",
    "aliases": [],
    "arg": "FNAME",
    "description": "file to read grammar from",
    "extra": [],
    "deprecated": false,
    "section": "sampling"
  },
  {
    "id": "json-schema",
    "primary": "--json-schema",
    "aliases": [
      "-j"
    ],
    "arg": "SCHEMA",
    "description": "JSON schema to constrain generations (https://json-schema.org/), e.g. `{\"type\": \"object\"}` for any JSON object",
    "extra": [],
    "deprecated": false,
    "section": "sampling"
  },
  {
    "id": "json-schema-file",
    "primary": "--json-schema-file",
    "aliases": [
      "-jf"
    ],
    "arg": "FILE",
    "description": "File containing a JSON schema to constrain generations (https://json-schema.org/), e.g. `{\"type\": \"object\"}` for any JSON object",
    "extra": [],
    "deprecated": false,
    "section": "sampling"
  },
  {
    "id": "backend-sampling",
    "primary": "--backend-sampling",
    "aliases": [
      "-bs"
    ],
    "description": "enable backend sampling (experimental)",
    "extra": [],
    "default": "disabled",
    "env": "LLAMA_ARG_BACKEND_SAMPLING",
    "deprecated": false,
    "section": "sampling"
  },
  {
    "id": "lookup-cache-static",
    "primary": "--lookup-cache-static",
    "aliases": [
      "-lcs"
    ],
    "arg": "FNAME",
    "description": "path to static lookup cache to use for lookup decoding (not updated by generation)",
    "extra": [],
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "lookup-cache-dynamic",
    "primary": "--lookup-cache-dynamic",
    "aliases": [
      "-lcd"
    ],
    "arg": "FNAME",
    "description": "path to dynamic lookup cache to use for lookup decoding (updated by generation)",
    "extra": [],
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "kv-unified-per-slot",
    "primary": "--kv-unified-per-slot",
    "aliases": [],
    "arg": "N",
    "description": "context limit per parallel slot.",
    "extra": [
      "when set without -c/--ctx-size, the shared KV pool is sized to n_parallel*N"
    ],
    "default": "unset, behavior unchanged",
    "env": "LLAMA_ARG_KV_UNIFIED_PER_SLOT",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "ctx-checkpoints",
    "primary": "--ctx-checkpoints",
    "aliases": [
      "-ctxcp",
      "--swa-checkpoints"
    ],
    "arg": "N",
    "description": "max number of context checkpoints to create per slot",
    "extra": [],
    "default": "32",
    "env": "LLAMA_ARG_CTX_CHECKPOINTS",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "checkpoint-min-step",
    "primary": "--checkpoint-min-step",
    "aliases": [
      "-cms"
    ],
    "arg": "N",
    "description": "minimum spacing between context checkpoints in tokens",
    "extra": [],
    "default": "8192, 0 = no minimum",
    "env": "LLAMA_ARG_CHECKPOINT_MIN_SPACING_NT",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "cache-ram",
    "primary": "--cache-ram",
    "aliases": [
      "-cram"
    ],
    "arg": "N",
    "description": "set the maximum cache size in MiB",
    "extra": [],
    "default": "8192, -1 - no limit, 0 - disable",
    "env": "LLAMA_ARG_CACHE_RAM",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "kv-unified",
    "primary": "--kv-unified",
    "aliases": [
      "-kvu",
      "-no-kvu",
      "--no-kv-unified"
    ],
    "description": "use single unified KV buffer shared across all sequences",
    "extra": [],
    "default": "enabled if number of slots is auto",
    "env": "LLAMA_ARG_KV_UNIFIED",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "cache-idle-slots",
    "primary": "--cache-idle-slots",
    "aliases": [
      "--no-cache-idle-slots"
    ],
    "description": "save idle slots to the prompt cache on new task, and clear them when using unified KV",
    "extra": [],
    "default": "enabled, requires cache-ram",
    "env": "LLAMA_ARG_CACHE_IDLE_SLOTS",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "context-shift",
    "primary": "--context-shift",
    "aliases": [
      "--no-context-shift"
    ],
    "description": "whether to use context shift on infinite text generation",
    "extra": [],
    "default": "disabled",
    "env": "LLAMA_ARG_CONTEXT_SHIFT",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "reverse-prompt",
    "primary": "--reverse-prompt",
    "aliases": [
      "-r"
    ],
    "arg": "PROMPT",
    "description": "halt generation at PROMPT, return control in interactive mode",
    "extra": [],
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "special",
    "primary": "--special",
    "aliases": [
      "-sp"
    ],
    "description": "special tokens output enabled",
    "extra": [],
    "default": "false",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "warmup",
    "primary": "--warmup",
    "aliases": [
      "--no-warmup"
    ],
    "description": "whether to perform warmup with an empty run",
    "extra": [],
    "default": "enabled",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spm-infill",
    "primary": "--spm-infill",
    "aliases": [],
    "description": "use Suffix/Prefix/Middle pattern for infill (instead of Prefix/Suffix/Middle) as some models prefer this.",
    "extra": [],
    "default": "disabled",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "pooling",
    "primary": "--pooling",
    "aliases": [],
    "arg": "{none,mean,cls,last,rank}",
    "description": "pooling type for embeddings, use model default if unspecified",
    "extra": [],
    "env": "LLAMA_ARG_POOLING",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "parallel",
    "primary": "--parallel",
    "aliases": [
      "-np"
    ],
    "arg": "N",
    "description": "number of server slots",
    "extra": [],
    "default": "-1, -1 = auto",
    "env": "LLAMA_ARG_N_PARALLEL",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "cont-batching",
    "primary": "--cont-batching",
    "aliases": [
      "-cb",
      "-nocb",
      "--no-cont-batching"
    ],
    "description": "whether to enable continuous batching (a.k.a dynamic batching)",
    "extra": [],
    "default": "enabled",
    "env": "LLAMA_ARG_CONT_BATCHING",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "mmproj",
    "primary": "--mmproj",
    "aliases": [
      "-mm"
    ],
    "arg": "FILE",
    "description": "path to a multimodal projector file. see tools/mtmd/README.md",
    "extra": [
      "note: if -hf is used, this argument can be omitted"
    ],
    "env": "LLAMA_ARG_MMPROJ",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "mmproj-url",
    "primary": "--mmproj-url",
    "aliases": [
      "-mmu"
    ],
    "arg": "URL",
    "description": "URL to a multimodal projector file. see tools/mtmd/README.md",
    "extra": [],
    "env": "LLAMA_ARG_MMPROJ_URL",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "mmproj-auto",
    "primary": "--mmproj-auto",
    "aliases": [
      "--no-mmproj",
      "--no-mmproj-auto"
    ],
    "description": "whether to use multimodal projector file (if available), useful when using -hf",
    "extra": [],
    "default": "enabled",
    "env": "LLAMA_ARG_MMPROJ_AUTO",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "mmproj-offload",
    "primary": "--mmproj-offload",
    "aliases": [
      "--no-mmproj-offload"
    ],
    "description": "whether to enable GPU offloading for multimodal projector",
    "extra": [],
    "default": "enabled",
    "env": "LLAMA_ARG_MMPROJ_OFFLOAD",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "mmproj-device",
    "primary": "--mmproj-device",
    "aliases": [
      "-mmdev"
    ],
    "arg": "DEVICE",
    "description": "device to use for multimodal projector (none = don't offload, default: follows --device)",
    "extra": [
      "use --list-devices to see a list of available devices"
    ],
    "env": "MTMD_BACKEND_DEVICE",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "image-min-tokens",
    "primary": "--image-min-tokens",
    "aliases": [],
    "arg": "N",
    "description": "minimum number of tokens each image can take, only used by vision models with dynamic resolution",
    "extra": [],
    "default": "read from model",
    "env": "LLAMA_ARG_IMAGE_MIN_TOKENS",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "image-max-tokens",
    "primary": "--image-max-tokens",
    "aliases": [],
    "arg": "N",
    "description": "maximum number of tokens each image can take, only used by vision models with dynamic resolution",
    "extra": [],
    "default": "read from model",
    "env": "LLAMA_ARG_IMAGE_MAX_TOKENS",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "mtmd-batch-max-tokens",
    "primary": "--mtmd-batch-max-tokens",
    "aliases": [],
    "arg": "N",
    "description": "maximum number of image tokens per batch when encoding images",
    "extra": [],
    "default": "1024",
    "env": "LLAMA_ARG_MTMD_BATCH_MAX_TOKENS",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "video-fps",
    "primary": "--video-fps",
    "aliases": [],
    "arg": "N",
    "description": "target video frame rate",
    "extra": [],
    "default": "4.0",
    "env": "LLAMA_ARG_VIDEO_FPS",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "video-timestamp-interval",
    "primary": "--video-timestamp-interval",
    "aliases": [],
    "arg": "N",
    "description": "interval in milliseconds between text timestamps",
    "extra": [],
    "default": "5000",
    "env": "LLAMA_ARG_VIDEO_TIMESTAMP_INTERVAL",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "video-ffmpeg-dir",
    "primary": "--video-ffmpeg-dir",
    "aliases": [],
    "arg": "DIR",
    "description": "path to the directory containing ffmpeg and ffprobe",
    "extra": [],
    "default": "search in PATH",
    "env": "LLAMA_ARG_VIDEO_FFMPEG_DIR",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "alias",
    "primary": "--alias",
    "aliases": [
      "-a"
    ],
    "arg": "STRING",
    "description": "set model name aliases, comma-separated (to be used by API)",
    "extra": [],
    "env": "LLAMA_ARG_ALIAS",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "tags",
    "primary": "--tags",
    "aliases": [],
    "arg": "STRING",
    "description": "set model tags, comma-separated (informational, not used for routing)",
    "extra": [],
    "env": "LLAMA_ARG_TAGS",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "embd-normalize",
    "primary": "--embd-normalize",
    "aliases": [],
    "arg": "N",
    "description": "normalisation for embeddings (-1=none, 0=max absolute int16, 1=taxicab, 2=euclidean, >2=p-norm)",
    "extra": [],
    "default": "2",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "host",
    "primary": "--host",
    "aliases": [],
    "arg": "HOST",
    "description": "IP addresses to listen on, comma-separated, or UNIX socket paths ending in .sock; with multiple TCP addresses, :: binds IPv6 only; overlapping addresses result in undefined behavior",
    "extra": [],
    "default": "127.0.0.1",
    "env": "LLAMA_ARG_HOST",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "port",
    "primary": "--port",
    "aliases": [],
    "arg": "PORT",
    "description": "port to listen",
    "extra": [],
    "default": "8080",
    "env": "LLAMA_ARG_PORT",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "reuse-port",
    "primary": "--reuse-port",
    "aliases": [],
    "description": "allow multiple sockets to bind to the same port",
    "extra": [],
    "default": "disabled",
    "env": "LLAMA_ARG_REUSE_PORT",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "path",
    "primary": "--path",
    "aliases": [],
    "arg": "PATH",
    "description": "path to serve static files from",
    "extra": [],
    "default": "",
    "env": "LLAMA_ARG_STATIC_PATH",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "cors-origins",
    "primary": "--cors-origins",
    "aliases": [],
    "arg": "ORIGINS",
    "description": "comma-separated list of allowed origins for CORS",
    "extra": [
      "if set to special value 'localhost', reflect the Origin header only if it is localhost"
    ],
    "default": "*",
    "env": "LLAMA_ARG_CORS_ORIGINS",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "cors-methods",
    "primary": "--cors-methods",
    "aliases": [],
    "arg": "METHODS",
    "description": "comma-separated list of allowed methods for CORS",
    "extra": [],
    "default": "GET, POST, DELETE, OPTIONS",
    "env": "LLAMA_ARG_CORS_METHODS",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "cors-headers",
    "primary": "--cors-headers",
    "aliases": [],
    "arg": "HEADERS",
    "description": "comma-separated list of allowed headers for CORS",
    "extra": [],
    "default": "*",
    "env": "LLAMA_ARG_CORS_HEADERS",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "cors-credentials",
    "primary": "--cors-credentials",
    "aliases": [
      "--no-cors-credentials"
    ],
    "description": "whether to allow credentials for CORS",
    "extra": [
      "note: if this is enabled and --cors-origins is set to * (default), the Origin header will be echoed back, and credentials will always be allowed"
    ],
    "default": "enabled",
    "env": "LLAMA_ARG_CORS_CREDENTIALS",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "api-prefix",
    "primary": "--api-prefix",
    "aliases": [],
    "arg": "PREFIX",
    "description": "prefix path the server serves from, without the trailing slash",
    "extra": [],
    "default": "",
    "env": "LLAMA_ARG_API_PREFIX",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "ui-config",
    "primary": "--ui-config",
    "aliases": [
      "--webui-config"
    ],
    "arg": "JSON",
    "description": "JSON that provides default UI settings (overrides UI defaults)",
    "extra": [],
    "env": "LLAMA_ARG_UI_CONFIG",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "ui-config-file",
    "primary": "--ui-config-file",
    "aliases": [
      "--webui-config-file"
    ],
    "arg": "PATH",
    "description": "JSON file that provides default UI settings (overrides UI defaults)",
    "extra": [],
    "env": "LLAMA_ARG_UI_CONFIG_FILE",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "ui-mcp-proxy",
    "primary": "--ui-mcp-proxy",
    "aliases": [
      "--webui-mcp-proxy",
      "--no-ui-mcp-proxy",
      "--no-webui-mcp-proxy"
    ],
    "description": "experimental: whether to enable MCP CORS proxy - do not enable in untrusted environments",
    "extra": [],
    "default": "disabled",
    "env": "LLAMA_ARG_UI_MCP_PROXY",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "tools",
    "primary": "--tools",
    "aliases": [],
    "arg": "TOOL1,TOOL2,...",
    "description": "experimental: whether to enable built-in tools for AI agents - do not enable in untrusted environments",
    "extra": [
      "specify \"all\" to enable all tools",
      "available tools: read_file, file_glob_search, grep_search, exec_shell_command, write_file, edit_file, get_info",
      "note: for security reasons, this will limit --cors-origins to localhost by default"
    ],
    "default": "no tools",
    "env": "LLAMA_ARG_TOOLS",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "tools-runtime",
    "primary": "--tools-runtime",
    "aliases": [],
    "arg": "OPTION",
    "description": "experimental: run tools in a separate runtime environment",
    "extra": [
      "available options:",
      "'docker:<image>', 'podman:<image>': spin up a new container and reuse it for all invocations, clean up on server exit",
      "'docker-container:<id>', 'podman-container:<id>': use an existing container by ID, won't stop on server exit",
      "'ssh:<target>': run tools on a remote POSIX host over SSH, key-based auth and a trusted host key are required"
    ],
    "default": "none, use host environment",
    "env": "LLAMA_ARG_TOOLS_RUNTIME",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "mcp-servers-config",
    "primary": "--mcp-servers-config",
    "aliases": [],
    "arg": "PATH",
    "description": "experimental: path to JSON file with MCP server definitions (Cursor-compatible format) - do not enable in untrusted environments",
    "extra": [
      "note: for security reasons, this will limit --cors-origins to localhost by default"
    ],
    "default": "none",
    "env": "LLAMA_ARG_MCP_SERVERS_CONFIG",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "mcp-servers-json",
    "primary": "--mcp-servers-json",
    "aliases": [],
    "arg": "JSON",
    "description": "experimental: inline JSON with MCP server definitions (Cursor-compatible format) - do not enable in untrusted environments",
    "extra": [
      "note: for security reasons, this will limit --cors-origins to localhost by default"
    ],
    "default": "none",
    "env": "LLAMA_ARG_MCP_SERVERS_JSON",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "agent",
    "primary": "--agent",
    "aliases": [
      "-ag",
      "-no-ag",
      "--no-agent"
    ],
    "description": "whether to enable CORS proxy and all built-in tools - do not enable in untrusted environments",
    "extra": [
      "note: for security reasons, this will limit --cors-origins to localhost by default"
    ],
    "default": "disabled",
    "env": "LLAMA_ARG_AGENT",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "ui",
    "primary": "--ui",
    "aliases": [
      "--webui",
      "--no-ui",
      "--no-webui"
    ],
    "description": "whether to enable the Web UI",
    "extra": [],
    "default": "enabled",
    "env": "LLAMA_ARG_UI",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "embedding",
    "primary": "--embedding",
    "aliases": [
      "--embeddings"
    ],
    "description": "restrict to only support embedding use case; use only with dedicated embedding models",
    "extra": [],
    "default": "disabled",
    "env": "LLAMA_ARG_EMBEDDINGS",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "rerank",
    "primary": "--rerank",
    "aliases": [
      "--reranking"
    ],
    "description": "enable reranking endpoint on server",
    "extra": [],
    "default": "disabled",
    "env": "LLAMA_ARG_RERANKING",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "api-key",
    "primary": "--api-key",
    "aliases": [],
    "arg": "KEY",
    "description": "API key to use for authentication, multiple keys can be provided as a comma-separated list",
    "extra": [],
    "default": "none",
    "env": "LLAMA_API_KEY",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "api-key-file",
    "primary": "--api-key-file",
    "aliases": [],
    "arg": "FNAME",
    "description": "path to file containing API keys, one per line; lines starting with a hash are treated as comments",
    "extra": [],
    "default": "none",
    "env": "LLAMA_ARG_API_KEY_FILE",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "ssl-key-file",
    "primary": "--ssl-key-file",
    "aliases": [],
    "arg": "FNAME",
    "description": "path to file a PEM-encoded SSL private key",
    "extra": [],
    "env": "LLAMA_ARG_SSL_KEY_FILE",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "ssl-cert-file",
    "primary": "--ssl-cert-file",
    "aliases": [],
    "arg": "FNAME",
    "description": "path to file a PEM-encoded SSL certificate",
    "extra": [],
    "env": "LLAMA_ARG_SSL_CERT_FILE",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "chat-template-kwargs",
    "primary": "--chat-template-kwargs",
    "aliases": [],
    "arg": "STRING",
    "description": "sets additional params for the json template parser, must be a valid json object string, e.g. '{\"key1\":\"value1\",\"key2\":\"value2\"}'",
    "extra": [],
    "env": "LLAMA_ARG_CHAT_TEMPLATE_KWARGS",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "timeout",
    "primary": "--timeout",
    "aliases": [
      "-to"
    ],
    "arg": "N",
    "description": "server read/write timeout in seconds",
    "extra": [],
    "default": "3600",
    "env": "LLAMA_ARG_TIMEOUT",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "sse-ping-interval",
    "primary": "--sse-ping-interval",
    "aliases": [],
    "arg": "N",
    "description": "server SSE ping interval in seconds (-1 = disabled, default: 30)",
    "extra": [],
    "env": "LLAMA_ARG_SSE_PING_INTERVAL",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "threads-http",
    "primary": "--threads-http",
    "aliases": [],
    "arg": "N",
    "description": "number of threads used to process HTTP requests",
    "extra": [],
    "default": "-1",
    "env": "LLAMA_ARG_THREADS_HTTP",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "cache-prompt",
    "primary": "--cache-prompt",
    "aliases": [
      "--no-cache-prompt"
    ],
    "description": "whether to enable prompt caching",
    "extra": [],
    "default": "enabled",
    "env": "LLAMA_ARG_CACHE_PROMPT",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "cache-reuse",
    "primary": "--cache-reuse",
    "aliases": [],
    "arg": "N",
    "description": "min chunk size to attempt reusing from the cache via KV shifting, requires prompt caching to be enabled",
    "extra": [],
    "default": "0",
    "env": "LLAMA_ARG_CACHE_REUSE",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "metrics",
    "primary": "--metrics",
    "aliases": [],
    "description": "enable prometheus compatible metrics endpoint",
    "extra": [],
    "default": "disabled",
    "env": "LLAMA_ARG_ENDPOINT_METRICS",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "props",
    "primary": "--props",
    "aliases": [],
    "description": "enable changing global properties via POST /props",
    "extra": [],
    "default": "disabled",
    "env": "LLAMA_ARG_ENDPOINT_PROPS",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "slots",
    "primary": "--slots",
    "aliases": [
      "--no-slots"
    ],
    "description": "expose slots monitoring endpoint",
    "extra": [],
    "default": "enabled",
    "env": "LLAMA_ARG_ENDPOINT_SLOTS",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "slot-save-path",
    "primary": "--slot-save-path",
    "aliases": [],
    "arg": "PATH",
    "description": "path to save slot kv cache",
    "extra": [],
    "default": "disabled",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "media-path",
    "primary": "--media-path",
    "aliases": [],
    "arg": "PATH",
    "description": "directory for loading local media files; files can be accessed via file:// URLs using relative paths",
    "extra": [],
    "default": "disabled",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "models-dir",
    "primary": "--models-dir",
    "aliases": [],
    "arg": "PATH",
    "description": "directory containing models for the router server",
    "extra": [],
    "default": "disabled",
    "env": "LLAMA_ARG_MODELS_DIR",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "models-preset",
    "primary": "--models-preset",
    "aliases": [],
    "arg": "PATH",
    "description": "path to INI file containing model presets for the router server",
    "extra": [],
    "default": "disabled",
    "env": "LLAMA_ARG_MODELS_PRESET",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "models-max",
    "primary": "--models-max",
    "aliases": [],
    "arg": "N",
    "description": "for router server, maximum number of models to load simultaneously",
    "extra": [],
    "default": "4, 0 = unlimited",
    "env": "LLAMA_ARG_MODELS_MAX",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "models-autoload",
    "primary": "--models-autoload",
    "aliases": [
      "--no-models-autoload"
    ],
    "description": "for router server, whether to automatically load models",
    "extra": [],
    "default": "enabled",
    "env": "LLAMA_ARG_MODELS_AUTOLOAD",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "jinja",
    "primary": "--jinja",
    "aliases": [
      "--no-jinja"
    ],
    "description": "whether to use jinja template engine for chat",
    "extra": [],
    "default": "enabled",
    "env": "LLAMA_ARG_JINJA",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "reasoning-format",
    "primary": "--reasoning-format",
    "aliases": [],
    "arg": "FORMAT",
    "description": "controls whether thought tags are allowed and/or extracted from the response, and in which format they're returned; one of:",
    "extra": [
      "- none: leaves thoughts unparsed in `message.content`",
      "- deepseek: puts thoughts in `message.reasoning_content`",
      "- deepseek-legacy: keeps `<think>` tags in `message.content` while also populating `message.reasoning_content`"
    ],
    "default": "auto",
    "env": "LLAMA_ARG_THINK",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "reasoning",
    "primary": "--reasoning",
    "aliases": [
      "-rea"
    ],
    "arg": "[on|off|auto]",
    "description": "Use reasoning/thinking in the chat ('on', 'off', or 'auto', default: 'auto' (detect from template))",
    "extra": [],
    "env": "LLAMA_ARG_REASONING",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "reasoning-effort",
    "primary": "--reasoning-effort",
    "aliases": [],
    "arg": "LEVEL",
    "description": "reasoning effort level given to the chat template: 'default' to keep the template default,",
    "extra": [
      "or a level such as 'minimal', 'low', 'medium', 'high', 'xhigh' or 'max' (default: default)"
    ],
    "env": "LLAMA_ARG_REASONING_EFFORT",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "reasoning-budget",
    "primary": "--reasoning-budget",
    "aliases": [],
    "arg": "N",
    "description": "token budget for thinking: -1 for unrestricted, 0 for immediate end, N>0 for token budget",
    "extra": [],
    "default": "-1",
    "env": "LLAMA_ARG_THINK_BUDGET",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "reasoning-budget-message",
    "primary": "--reasoning-budget-message",
    "aliases": [],
    "arg": "MESSAGE",
    "description": "message injected before the end-of-thinking tag when reasoning budget is exhausted",
    "extra": [],
    "default": "none",
    "env": "LLAMA_ARG_THINK_BUDGET_MESSAGE",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "reasoning-preserve",
    "primary": "--reasoning-preserve",
    "aliases": [
      "--no-reasoning-preserve"
    ],
    "description": "preserve reasoning trace in the full history, not just the last assistant message",
    "extra": [
      "compatible with certain templates having 'supports_preserve_reasoning' capability",
      "example: https://docs.z.ai/guides/capabilities/thinking-mode#preserved-thinking"
    ],
    "default": "enabled",
    "env": "LLAMA_ARG_REASONING_PRESERVE",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "chat-template",
    "primary": "--chat-template",
    "aliases": [],
    "arg": "JINJA_TEMPLATE",
    "description": "set custom jinja chat template",
    "extra": [
      "if suffix/prefix are specified, template will be disabled",
      "only commonly used templates are accepted (unless --jinja is set before this flag):",
      "list of built-in templates:",
      "bailing, bailing-think, bailing2, chatglm3, chatglm4, chatml, command-r, deepseek, deepseek-ocr, deepseek2, deepseek3, exaone-moe, exaone3, exaone4, falcon3, gemma, gigachat, glmedge, gpt-oss, granite, granite-4.0, granite-4.1, grok-2, hunyuan-dense, hunyuan-moe, hunyuan-vl, kimi-k2, llama2, llama2-sys, llama2-sys-bos, llama2-sys-strip, llama3, llama4, megrez, minicpm, mistral-v1, mistral-v3, mistral-v3-tekken, mistral-v7, mistral-v7-tekken, monarch, openchat, orion, pangu-embedded, phi3, phi4, rwkv-world, seed_oss, smolvlm, solar-open, vicuna, vicuna-orca, yandex, zephyr"
    ],
    "default": "template taken from model's metadata",
    "env": "LLAMA_ARG_CHAT_TEMPLATE",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "chat-template-file",
    "primary": "--chat-template-file",
    "aliases": [],
    "arg": "JINJA_TEMPLATE_FILE",
    "description": "set custom jinja chat template file",
    "extra": [
      "if suffix/prefix are specified, template will be disabled",
      "only commonly used templates are accepted (unless --jinja is set before this flag):",
      "list of built-in templates:",
      "bailing, bailing-think, bailing2, chatglm3, chatglm4, chatml, command-r, deepseek, deepseek-ocr, deepseek2, deepseek3, exaone-moe, exaone3, exaone4, falcon3, gemma, gigachat, glmedge, gpt-oss, granite, granite-4.0, granite-4.1, grok-2, hunyuan-dense, hunyuan-moe, hunyuan-vl, kimi-k2, llama2, llama2-sys, llama2-sys-bos, llama2-sys-strip, llama3, llama4, megrez, minicpm, mistral-v1, mistral-v3, mistral-v3-tekken, mistral-v7, mistral-v7-tekken, monarch, openchat, orion, pangu-embedded, phi3, phi4, rwkv-world, seed_oss, smolvlm, solar-open, vicuna, vicuna-orca, yandex, zephyr"
    ],
    "default": "template taken from model's metadata",
    "env": "LLAMA_ARG_CHAT_TEMPLATE_FILE",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "skip-chat-parsing",
    "primary": "--skip-chat-parsing",
    "aliases": [
      "--no-skip-chat-parsing"
    ],
    "description": "force a pure content parser, even if a Jinja template is specified; model will output everything in the content section, including any reasoning and/or tool calls",
    "extra": [],
    "default": "disabled",
    "env": "LLAMA_ARG_SKIP_CHAT_PARSING",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "prefill-assistant",
    "primary": "--prefill-assistant",
    "aliases": [
      "--no-prefill-assistant"
    ],
    "description": "whether to prefill the assistant's response if the last message is an assistant message",
    "extra": [
      "when this flag is set, if the last message is an assistant message then it will be treated as a full message and not prefilled"
    ],
    "default": "prefill enabled",
    "env": "LLAMA_ARG_PREFILL_ASSISTANT",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "slot-prompt-similarity",
    "primary": "--slot-prompt-similarity",
    "aliases": [
      "-sps"
    ],
    "arg": "SIMILARITY",
    "description": "how much the prompt of a request must match the prompt of a slot in order to use that slot",
    "extra": [],
    "default": "0.10, 0.0 = disabled",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "lora-init-without-apply",
    "primary": "--lora-init-without-apply",
    "aliases": [],
    "description": "load LoRA adapters without applying them (apply later via POST /lora-adapters)",
    "extra": [],
    "default": "disabled",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "sleep-idle-seconds",
    "primary": "--sleep-idle-seconds",
    "aliases": [],
    "arg": "SECONDS",
    "description": "number of seconds of idleness after which the server will sleep",
    "extra": [],
    "default": "-1; -1 = disabled",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "log-prompts-dir",
    "primary": "--log-prompts-dir",
    "aliases": [],
    "arg": "PATH",
    "description": "Log prompts to directory (auto-created if not present; only used for debugging, default: disabled)",
    "extra": [],
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-draft-hf",
    "primary": "--spec-draft-hf",
    "aliases": [
      "-hfd",
      "-hfrd",
      "--hf-repo-draft"
    ],
    "arg": "<user>/<model>[:quant]",
    "description": "Same as --hf-repo, but for the draft model",
    "extra": [],
    "default": "unused",
    "env": "LLAMA_ARG_SPEC_DRAFT_HF_REPO",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-draft-threads",
    "primary": "--spec-draft-threads",
    "aliases": [
      "-td",
      "--threads-draft"
    ],
    "arg": "N",
    "description": "number of threads to use during generation",
    "extra": [],
    "default": "same as --threads",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-draft-threads-batch",
    "primary": "--spec-draft-threads-batch",
    "aliases": [
      "-tbd",
      "--threads-batch-draft"
    ],
    "arg": "N",
    "description": "number of threads to use during batch and prompt processing",
    "extra": [],
    "default": "same as --threads-draft",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-draft-cpu-mask",
    "primary": "--spec-draft-cpu-mask",
    "aliases": [
      "-Cd",
      "--cpu-mask-draft"
    ],
    "arg": "M",
    "description": "Draft model CPU affinity mask. Complements cpu-range-draft",
    "extra": [],
    "default": "same as --cpu-mask",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-draft-cpu-range",
    "primary": "--spec-draft-cpu-range",
    "aliases": [
      "-Crd",
      "--cpu-range-draft"
    ],
    "arg": "lo-hi",
    "description": "Ranges of CPUs for affinity. Complements --cpu-mask-draft",
    "extra": [],
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-draft-cpu-strict",
    "primary": "--spec-draft-cpu-strict",
    "aliases": [
      "--cpu-strict-draft"
    ],
    "arg": "<0|1>",
    "description": "Use strict CPU placement for draft model",
    "extra": [],
    "default": "same as --cpu-strict",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-draft-prio",
    "primary": "--spec-draft-prio",
    "aliases": [
      "--prio-draft"
    ],
    "arg": "N",
    "description": "set draft process/thread priority : 0-normal, 1-medium, 2-high, 3-realtime",
    "extra": [],
    "default": "0",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-draft-poll",
    "primary": "--spec-draft-poll",
    "aliases": [
      "--poll-draft"
    ],
    "arg": "<0|1>",
    "description": "Use polling to wait for draft model work",
    "extra": [],
    "default": "same as --poll",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-draft-cpu-mask-batch",
    "primary": "--spec-draft-cpu-mask-batch",
    "aliases": [
      "-Cbd",
      "--cpu-mask-batch-draft"
    ],
    "arg": "M",
    "description": "Draft model CPU affinity mask. Complements cpu-range-draft",
    "extra": [],
    "default": "same as --cpu-mask",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-draft-cpu-strict-batch",
    "primary": "--spec-draft-cpu-strict-batch",
    "aliases": [
      "--cpu-strict-batch-draft"
    ],
    "arg": "<0|1>",
    "description": "Use strict CPU placement for draft model",
    "extra": [],
    "default": "--cpu-strict-draft",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-draft-prio-batch",
    "primary": "--spec-draft-prio-batch",
    "aliases": [
      "--prio-batch-draft"
    ],
    "arg": "N",
    "description": "set draft process/thread priority : 0-normal, 1-medium, 2-high, 3-realtime",
    "extra": [],
    "default": "0",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-draft-poll-batch",
    "primary": "--spec-draft-poll-batch",
    "aliases": [
      "--poll-batch-draft"
    ],
    "arg": "<0|1>",
    "description": "Use polling to wait for draft model work",
    "extra": [],
    "default": "--poll-draft",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-draft-override-tensor",
    "primary": "--spec-draft-override-tensor",
    "aliases": [
      "-otd",
      "--override-tensor-draft"
    ],
    "arg": "<tensor name pattern>=<buffer type>,...",
    "description": "override tensor buffer type for draft model",
    "extra": [],
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-draft-cpu-moe",
    "primary": "--spec-draft-cpu-moe",
    "aliases": [
      "-cmoed",
      "--cpu-moe-draft"
    ],
    "description": "keep all Mixture of Experts (MoE) weights in the CPU for the draft model",
    "extra": [],
    "env": "LLAMA_ARG_SPEC_DRAFT_CPU_MOE",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-draft-n-cpu-moe",
    "primary": "--spec-draft-n-cpu-moe",
    "aliases": [
      "--spec-draft-ncmoe",
      "-ncmoed",
      "--n-cpu-moe-draft"
    ],
    "arg": "N",
    "description": "keep the Mixture of Experts (MoE) weights of the first N layers in the CPU for the draft model",
    "extra": [],
    "env": "LLAMA_ARG_SPEC_DRAFT_N_CPU_MOE",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-draft-n-max",
    "primary": "--spec-draft-n-max",
    "aliases": [],
    "arg": "N",
    "description": "number of tokens to draft for speculative decoding",
    "extra": [],
    "default": "3",
    "env": "LLAMA_ARG_SPEC_DRAFT_N_MAX",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-draft-n-min",
    "primary": "--spec-draft-n-min",
    "aliases": [],
    "arg": "N",
    "description": "minimum number of draft tokens to use for speculative decoding",
    "extra": [],
    "default": "0",
    "env": "LLAMA_ARG_SPEC_DRAFT_N_MIN",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-synth-len",
    "primary": "--spec-synth-len",
    "aliases": [],
    "arg": "L",
    "description": "target mean synthetic acceptance length, including the target token (benchmarking only)",
    "extra": [],
    "env": "LLAMA_ARG_SPEC_SYNTH_LEN",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-synth-rates",
    "primary": "--spec-synth-rates",
    "aliases": [],
    "arg": "P0,P1,...",
    "description": "comma-separated unconditional per-position synthetic acceptance probabilities (benchmarking only)",
    "extra": [],
    "env": "LLAMA_ARG_SPEC_SYNTH_RATES",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-draft-p-split",
    "primary": "--spec-draft-p-split",
    "aliases": [
      "--draft-p-split"
    ],
    "arg": "P",
    "description": "speculative decoding split probability",
    "extra": [],
    "default": "0.10",
    "env": "LLAMA_ARG_SPEC_DRAFT_P_SPLIT",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-draft-p-min",
    "primary": "--spec-draft-p-min",
    "aliases": [
      "--draft-p-min"
    ],
    "arg": "P",
    "description": "minimum speculative decoding probability (greedy)",
    "extra": [],
    "default": "0.00",
    "env": "LLAMA_ARG_SPEC_DRAFT_P_MIN",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-draft-backend-sampling",
    "primary": "--spec-draft-backend-sampling",
    "aliases": [
      "--no-spec-draft-backend-sampling"
    ],
    "description": "offload draft sampling to the backend",
    "extra": [],
    "default": "enabled",
    "env": "LLAMA_ARG_SPEC_DRAFT_BACKEND_SAMPLING",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-draft-device",
    "primary": "--spec-draft-device",
    "aliases": [
      "-devd",
      "--device-draft"
    ],
    "arg": "<dev1,dev2,..>",
    "description": "comma-separated list of devices to use for offloading the draft model (none = don't offload, default: follows --device)",
    "extra": [
      "use --list-devices to see a list of available devices"
    ],
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-draft-ngl",
    "primary": "--spec-draft-ngl",
    "aliases": [
      "-ngld",
      "--gpu-layers-draft",
      "--n-gpu-layers-draft"
    ],
    "arg": "N",
    "description": "max. number of draft model layers to store in VRAM, either an exact number, 'auto', or 'all'",
    "extra": [],
    "default": "auto",
    "env": "LLAMA_ARG_N_GPU_LAYERS_DRAFT",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-draft-model",
    "primary": "--spec-draft-model",
    "aliases": [
      "-md",
      "--model-draft"
    ],
    "arg": "FNAME",
    "description": "draft model for speculative decoding",
    "extra": [],
    "default": "unused",
    "env": "LLAMA_ARG_SPEC_DRAFT_MODEL",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-type",
    "primary": "--spec-type",
    "aliases": [],
    "arg": "none,draft-simple,draft-eagle3,draft-mtp,draft-dflash,draft-dspark,ngram-simple,ngram-map-k,ngram-map-k4v,ngram-mod,ngram-cache",
    "description": "comma-separated list of types of speculative decoding to use",
    "extra": [],
    "default": "none",
    "env": "LLAMA_ARG_SPEC_TYPE",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-ngram-mod-n-min",
    "primary": "--spec-ngram-mod-n-min",
    "aliases": [],
    "arg": "N",
    "description": "minimum number of ngram tokens to use for ngram-based speculative decoding",
    "extra": [],
    "default": "48",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-ngram-mod-n-max",
    "primary": "--spec-ngram-mod-n-max",
    "aliases": [],
    "arg": "N",
    "description": "maximum number of ngram tokens to use for ngram-based speculative decoding",
    "extra": [],
    "default": "64",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-ngram-mod-n-match",
    "primary": "--spec-ngram-mod-n-match",
    "aliases": [],
    "arg": "N",
    "description": "ngram-mod lookup length",
    "extra": [],
    "default": "24",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-ngram-simple-size-n",
    "primary": "--spec-ngram-simple-size-n",
    "aliases": [],
    "arg": "N",
    "description": "ngram size N for ngram-simple speculative decoding, length of lookup n-gram",
    "extra": [],
    "default": "12",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-ngram-simple-size-m",
    "primary": "--spec-ngram-simple-size-m",
    "aliases": [],
    "arg": "N",
    "description": "ngram size M for ngram-simple speculative decoding, length of draft m-gram",
    "extra": [],
    "default": "48",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-ngram-simple-min-hits",
    "primary": "--spec-ngram-simple-min-hits",
    "aliases": [],
    "arg": "N",
    "description": "minimum hits for ngram-simple speculative decoding",
    "extra": [],
    "default": "1",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-ngram-map-k-size-n",
    "primary": "--spec-ngram-map-k-size-n",
    "aliases": [],
    "arg": "N",
    "description": "ngram size N for ngram-map-k speculative decoding, length of lookup n-gram",
    "extra": [],
    "default": "12",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-ngram-map-k-size-m",
    "primary": "--spec-ngram-map-k-size-m",
    "aliases": [],
    "arg": "N",
    "description": "ngram size M for ngram-map-k speculative decoding, length of draft m-gram",
    "extra": [],
    "default": "48",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-ngram-map-k-min-hits",
    "primary": "--spec-ngram-map-k-min-hits",
    "aliases": [],
    "arg": "N",
    "description": "minimum hits for ngram-map-k speculative decoding",
    "extra": [],
    "default": "1",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-ngram-map-k4v-size-n",
    "primary": "--spec-ngram-map-k4v-size-n",
    "aliases": [],
    "arg": "N",
    "description": "ngram size N for ngram-map-k4v speculative decoding, length of lookup n-gram",
    "extra": [],
    "default": "12",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-ngram-map-k4v-size-m",
    "primary": "--spec-ngram-map-k4v-size-m",
    "aliases": [],
    "arg": "N",
    "description": "ngram size M for ngram-map-k4v speculative decoding, length of draft m-gram",
    "extra": [],
    "default": "48",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-ngram-map-k4v-min-hits",
    "primary": "--spec-ngram-map-k4v-min-hits",
    "aliases": [],
    "arg": "N",
    "description": "minimum hits for ngram-map-k4v speculative decoding",
    "extra": [],
    "default": "1",
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "draft",
    "primary": "--draft",
    "aliases": [
      "--draft-n",
      "--draft-max"
    ],
    "arg": "N",
    "description": "the argument has been removed. use --spec-draft-n-max or --spec-ngram-mod-n-max",
    "extra": [],
    "env": "LLAMA_ARG_DRAFT_MAX",
    "deprecated": true,
    "section": "server"
  },
  {
    "id": "draft-min",
    "primary": "--draft-min",
    "aliases": [
      "--draft-n-min"
    ],
    "arg": "N",
    "description": "the argument has been removed. use --spec-draft-n-min or --spec-ngram-mod-n-min",
    "extra": [],
    "env": "LLAMA_ARG_DRAFT_MIN",
    "deprecated": true,
    "section": "server"
  },
  {
    "id": "spec-ngram-size-n",
    "primary": "--spec-ngram-size-n",
    "aliases": [],
    "arg": "N",
    "description": "the argument has been removed. use the respective --spec-ngram-*-size-n or --spec-ngram-mod-n-match",
    "extra": [],
    "deprecated": true,
    "section": "server"
  },
  {
    "id": "spec-ngram-size-m",
    "primary": "--spec-ngram-size-m",
    "aliases": [],
    "arg": "N",
    "description": "the argument has been removed. use the respective --spec-ngram-*-size-m",
    "extra": [],
    "deprecated": true,
    "section": "server"
  },
  {
    "id": "spec-ngram-min-hits",
    "primary": "--spec-ngram-min-hits",
    "aliases": [],
    "arg": "N",
    "description": "the argument has been removed. use the respective --spec-ngram-*-min-hits",
    "extra": [],
    "deprecated": true,
    "section": "server"
  },
  {
    "id": "embd-gemma-default",
    "primary": "--embd-gemma-default",
    "aliases": [],
    "description": "use default EmbeddingGemma model (note: can download weights from the internet)",
    "extra": [],
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "fim-qwen-1-5b-default",
    "primary": "--fim-qwen-1.5b-default",
    "aliases": [],
    "description": "use default Qwen 2.5 Coder 1.5B (note: can download weights from the internet)",
    "extra": [],
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "fim-qwen-3b-default",
    "primary": "--fim-qwen-3b-default",
    "aliases": [],
    "description": "use default Qwen 2.5 Coder 3B (note: can download weights from the internet)",
    "extra": [],
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "fim-qwen-7b-default",
    "primary": "--fim-qwen-7b-default",
    "aliases": [],
    "description": "use default Qwen 2.5 Coder 7B (note: can download weights from the internet)",
    "extra": [],
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "fim-qwen-7b-spec",
    "primary": "--fim-qwen-7b-spec",
    "aliases": [],
    "description": "use Qwen 2.5 Coder 7B + 0.5B draft for speculative decoding (note: can download weights from the internet)",
    "extra": [],
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "fim-qwen-14b-spec",
    "primary": "--fim-qwen-14b-spec",
    "aliases": [],
    "description": "use Qwen 2.5 Coder 14B + 0.5B draft for speculative decoding (note: can download weights from the internet)",
    "extra": [],
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "fim-qwen-30b-default",
    "primary": "--fim-qwen-30b-default",
    "aliases": [],
    "description": "use default Qwen 3 Coder 30B A3B Instruct (note: can download weights from the internet)",
    "extra": [],
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "gpt-oss-20b-default",
    "primary": "--gpt-oss-20b-default",
    "aliases": [],
    "description": "use gpt-oss-20b (note: can download weights from the internet)",
    "extra": [],
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "gpt-oss-120b-default",
    "primary": "--gpt-oss-120b-default",
    "aliases": [],
    "description": "use gpt-oss-120b (note: can download weights from the internet)",
    "extra": [],
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "vision-gemma-4b-default",
    "primary": "--vision-gemma-4b-default",
    "aliases": [],
    "description": "use Gemma 3 4B QAT (note: can download weights from the internet)",
    "extra": [],
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "vision-gemma-12b-default",
    "primary": "--vision-gemma-12b-default",
    "aliases": [],
    "description": "use Gemma 3 12B QAT (note: can download weights from the internet)",
    "extra": [],
    "deprecated": false,
    "section": "server"
  },
  {
    "id": "spec-default",
    "primary": "--spec-default",
    "aliases": [],
    "description": "enable default speculative decoding config",
    "extra": [],
    "deprecated": false,
    "section": "server"
  }
];
