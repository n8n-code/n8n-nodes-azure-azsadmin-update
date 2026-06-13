import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureAzsadminUpdateApi implements ICredentialType {
        name = 'N8nDevAzureAzsadminUpdateApi';

        displayName = 'Azure Azsadmin Update API';

        icon: Icon = { light: 'file:../nodes/AzureAzsadminUpdate/azure-azsadmin-update.png', dark: 'file:../nodes/AzureAzsadminUpdate/azure-azsadmin-update.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Azsadmin Update API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
