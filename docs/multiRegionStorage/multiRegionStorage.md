# Multi-Region Storage
**Important**: This page is for Cloud Storage in AWS. If you use Cloud Storage Cloud Storage in Azure, see the Azure storage section of the Cloud Storage Services online help.

Multi-region storage lets you store files in different regions across a global contact center. It can help you meet the different compliance requirements in the regions where your agents work. Storage in different regions is an automated process controlled by storage rules that you create and prioritize. When CXone Mpower generates a new file, it checks each rule, in order of priority, against the file properties to determine which region to store it in. The first rule to match the file properties applies.

You need a special license to use this feature. Contact your Account Representative to enable it.

**Example**:

Classics, Inc. has a contact center at their headquarters in Oregon, United States. They also have contact center locations in Frankfurt, Germany and Sydney, Australia. When agents in any region log in to CXone Mpower, they are logged in to the platform based in Oregon.
        
Classics enabled multi-region storage to keep their call recordings in the same region where the agent handled the call. This keeps them in compliance with privacy laws in the EU and Australia. To make their storage rules easier to manage, Classics created their CXone Mpower teams based on region and channel: agents handling inbound calls are part of the IBVoice-Oregon, IBVoice-Frankfurt, or IBVoice-Sydney team.

- When an agent on the IBVoice-Frankfurt team handles a call, the call is recorded in the base region of Oregon. The call recording is then physically stored in the Frankfurt location.
- When an agent on the IBVoice-Sydney team handles a call, the call is recorded in the base region of Oregon. The call recording is then physically stored in the Sydney location.
- When an agent on the IBVoice-Oregon team handles a call, the call is recorded in the base region of Oregon. The call recording is then physically stored in the Oregon region.
    
Call recordings in all three regions follow the same Life Cycle Management rule. They archive after 90 days. When this occurs, the files are archived in the same region where they were stored.

## Multi-Region Storage Rules
Multi-region storage rules use filters and rule priority to determine where to store files. A rule filter must include at least one of the following:
- Teams or agents
- ACD skills

**Important**: DNIS appears in the product as an option but is not currently functional.

When CXone Mpower generates a new file, it checks the filter of each multi-region storage rule against the file in order of priority. The first rule with a filter that matches the file applies to the file. The file then saves to the region specified by that rule. If an interaction doesn't match any regional storage rules, it saves to the default region.

The policies you set with Life Cycle Management rules are honored for all applicable files, no matter which region they're stored in. For example, if you set files to archive after 30 days,files in all configured regions archive after 30 days. The files are archived in the same region where they were stored.

## Key Facts About Multi-Region Storage
- Multi-region storage is not available for FedRAMP environments.
- Multi-region storage is available in several regions, with more regions planned. It is not supported in UAE. It cannot be supported in China, Taiwan, or Hong Kong due to data sovereignty restrictions in those regions.
- Multi-region storage is mutually exclusive with both custom storage and custom AWS KMS keys. You cannot use multi-region storage with either custom storage or a custom AWS KMS key, and vice versa.
Only the physical files are stored in the specified region. Interaction metadata is always stored in the hosted region.
- When you retrieve files from long-term storage, CXone Mpower searches the files in all your regions.​
- When you use Secure External Access (SEA) with multi-region storage, you use a different SEA bucket for each region.
- You can access files for download and playback from the hosted region.
- Once files have been stored, you cannot move them to other regions.
- Multi-region storage rules are file type-agnostic. When you set up a rule, all applicable interactions of any file type will follow it.
- When an AWS server is unavailable, your CXone Mpower handles file storage differently. 
    - When a secondary region is unavailable, files are stored in the default region.
    - If the default region is unavailable, files are stored in the hosted region.
- You cannot update active multi-region storage rules.
- You can have up to 10 active multi-region storage rules at the same time.
- If you decide to disable the multi-region storage feature, you must first deactivate all your multi-region storage rules.