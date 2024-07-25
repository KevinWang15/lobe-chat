import { ModelProviderCard } from '@/types/llm';

// ref https://openrouter.ai/docs#models
const OpenRouter: ModelProviderCard = {
  chatModels: [
    {
      displayName: 'Mistral Large 2',
      enabled: true,
      functionCall: false,
      id: 'mistralai/mistral-large',
      tokens: 8192,
      vision: false,
    },
  ],
  checkModel: 'mistralai/mistral-large',
  id: 'openrouter',
  modelList: { showModelFetcher: false },
  name: 'OpenRouter',
};

export default OpenRouter;
