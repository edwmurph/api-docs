import {
  S3Client,
  ListObjectsV2Command,
  GetObjectCommand
} from '@aws-sdk/client-s3'; // ES Modules import

const client = new S3Client();

export async function list_objects() {
  const command = new ListObjectsV2Command({
    Bucket: process.env.S3_BUCKET
  });

  return await client.send( command );
}

export async function get_object({ key }) {
  const command = new GetObjectCommand({
    Bucket: process.env.S3_BUCKET,
    Key: key
  });

  return await client.send( command );
}
