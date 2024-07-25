import {ModelProviderCard} from '@/types/llm';

// ref https://docs.together.ai/docs/inference-models
const TogetherAI: ModelProviderCard = {
  chatModels: [
    {
      displayName: 'Meta-Llama-3.1-405B-Instruct-Turbo',
      enabled: true,
      id: 'meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo',
      tokens: 16_384,
    },
    {
      displayName: 'meta-llama/Meta-Llama-3-70B-Instruct-Lite',
      enabled: false,
      id: 'meta-llama/Meta-Llama-3-70B-Instruct-Lite',
      tokens: 8_192,
    },
    {
      displayName: 'Qwen/Qwen2-72B-Instruct',
      enabled: false,
      id: 'Qwen/Qwen2-72B-Instruct',
      tokens: 16_384,
    },
    {
      displayName: 'mistralai/Mixtral-8x22B-Instruct-v0.1',
      enabled: false,
      id: 'mistralai/Mixtral-8x22B-Instruct-v0.1',
      tokens: 16_384,
    },
    {
      displayName: 'deepseek-ai/deepseek-llm-67b-chat',
      enabled: false,
      id: 'deepseek-ai/deepseek-llm-67b-chat',
      tokens: 16_384,
    },
    {
      displayName: 'deepseek-ai/deepseek-coder-33b-instruct',
      enabled: false,
      id: 'deepseek-ai/deepseek-coder-33b-instruct',
      tokens: 16_384,
    },
  ],
  checkModel: 'meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo',
  id: 'togetherai',
  modelList: {showModelFetcher: false},
  name: 'Together AI',
};

export default TogetherAI;
