import { createActions } from 'redux-actions';

const {
   clearComposeData,
   initComposeData,
   setMessageType,
   setFileId,
   setMessageContent,
   setAllContacts,
   setRecipientsData,
   setSenderName,
   setCallerId,
   //set random order
   setShuffle,
   //set email notification
   setEmailNotify,
   //set Campaign Name
   setCampaignName,
   //set option
   setCallback,
   setReplay,
   setBlock,
   setTransfer,
   setPlaybackCount,
   //file_id----------------------
   audioFileUpload,
   audioFileUploadSucceed,
   audioFileUploadFailed,
   //-----------------------------
   callbackVoiceFileUpload,
   callbackVoiceFileUploadSucceed,
   callbackVoiceFileUploadFailed,
   setCallbackFileId,
   blockVoiceFileUpload,
   blockVoiceFileUploadSucceed,
   blockVoiceFileUploadFailed,
   setBlockFileId,
   getTemplateFiles,
   getTemplateFilesSucceed,
   getTemplateFilesFailed,
   calculateCost,
   calculateCostSucceed,
   calculateCostFailed,
   addNumberManualy,
   addNumberManualySucceed,
   addNumberManualyFailed,
   saveCampaign,
   saveCampaignSucceed,
   saveCampaignFailed
} = createActions({
   CLEAR_COMPOSE_DATA: () => ({}),
   INIT_COMPOSE_DATA: (params) => ({params}),
   SET_MESSAGE_TYPE: (type) => ({type}),
   SET_FILE_ID: (id, name) => ({id, name}),
   SET_MESSAGE_CONTENT: (content) => ({content}),
   SET_ALL_CONTACTS: (all) => ({all}),
   SET_RECIPIENTS_DATA: (data, recipients_text) => ({data, recipients_text}),
   SET_SHUFFLE: (should_shuffle) => ({should_shuffle}),
   SET_EMAIL_NOTIFY: (get_email_notifications) => ({get_email_notifications}),
   SET_CAMPAIGN_NAME: (campaign_name) => ({campaign_name}),
   SET_PLAYBACK_COUNT: (playback_count) => ({playback_count}),
   SET_CALLBACK: (params) => ({params}),
   SET_REPLAY : (params) => ({params}),
   SET_BLOCK: (params) => ({params}),
   SET_TRANSFER: (params) => ({params}),
   SET_SENDER_NAME : (senderName) => ({senderName}),
   SET_CALLER_ID: (callerId) => ({callerId}),
   //Audio file upload actions
   AUDIO_FILE_UPLOAD: params => ({params}),
   AUDIO_FILE_UPLOAD_SUCCEED: audio => ({audio}),
   AUDIO_FILE_UPLOAD_FAILED: error => ({error}),

   CALLBACK_VOICE_FILE_UPLOAD: (params) => ({params}),
   CALLBACK_VOICE_FILE_UPLOAD_SUCCEED: (callbackAudio) => ({callbackAudio}),
   CALLBACK_VOICE_FILE_UPLOAD_FAILED: (error) => ({error}),
   SET_CALLBACK_FILE_ID: (id) => ({id}),
   BLOCK_VOICE_FILE_UPLOAD: (params) => ({params}),
   BLOCK_VOICE_FILE_UPLOAD_SUCCEED: (blockAudio) => ({blockAudio}),
   BLOCK_VOICE_FILE_UPLOAD_FAILED: (error) => ({error}),
   SET_BLOCK_FILE_ID: (id) => ({id}),
   //Template aduio files getting actions
   GET_TEMPLATE_FILES: () => ({}),
   GET_TEMPLATE_FILES_SUCCEED : (template_files) =>({template_files}),
   GET_TEMPLATE_FILES_FAILED: (error) => ({error}),
   //Add phone number and Calculate cost
   CALCULATE_COST: (params) => ({params}),
   CALCULATE_COST_SUCCEED: (costData) => ({costData}),
   CALCULATE_COST_FAILED: (error) => ({error}),
   //Add phone number manualy and calculate cost;
   ADD_NUMBER_MANUALY: (params) => ({params}),
   ADD_NUMBER_MANUALY_SUCCEED: (data) => ({data}),
   ADD_NUMBER_MANUALY_FAILED: (error) => ({error}),
   //Save Campaign
   SAVE_CAMPAIGN: (params) => ({params}),
   SAVE_CAMPAIGN_SUCCEED: (succeed) => ({succeed}),
   SAVE_CAMPAIGN_FAILED: (error) => ({error})
});

export {
    clearComposeData,
    initComposeData,
    setMessageType,
    setFileId,
    setMessageContent,
    setAllContacts,
    setRecipientsData,
    setShuffle,
    setEmailNotify,
    setCampaignName,
    setPlaybackCount,
    setCallback,
    setReplay,
    setBlock,
    setTransfer,
    setSenderName,
    setCallerId,
    audioFileUpload,
    audioFileUploadSucceed,
    audioFileUploadFailed,
    callbackVoiceFileUpload,
    callbackVoiceFileUploadSucceed,
    callbackVoiceFileUploadFailed,
    setCallbackFileId,
    blockVoiceFileUpload,
    blockVoiceFileUploadSucceed,
    blockVoiceFileUploadFailed,
    setBlockFileId,
    getTemplateFiles,
    getTemplateFilesSucceed,
    getTemplateFilesFailed,
    calculateCost,
    calculateCostSucceed,
    calculateCostFailed,
    addNumberManualy,
    addNumberManualySucceed,
    addNumberManualyFailed,
    saveCampaign,
    saveCampaignSucceed,
    saveCampaignFailed,
   
};
