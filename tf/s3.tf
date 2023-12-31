resource "aws_s3_bucket" "definitions" {
  bucket = "edwmurph-api-doc-definitions"  # replace with your desired bucket name
}

resource "aws_s3_bucket_ownership_controls" "definitions" {
  bucket = aws_s3_bucket.definitions.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_public_access_block" "definitions" {
  bucket = aws_s3_bucket.definitions.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_acl" "definitions" {
  depends_on = [
    aws_s3_bucket_ownership_controls.definitions,
    aws_s3_bucket_public_access_block.definitions,
  ]

  bucket = aws_s3_bucket.definitions.id
  acl    = "public-read"
}

resource "aws_s3_object" "team1_webhook_example" {
  bucket       = aws_s3_bucket.definitions.id
  key          = "team1/webhook-example.yaml"
  source       = "../definitions/team1/webhook-example.yaml"
  content_type = "text/yaml"
  etag         = filemd5("../definitions/team1/webhook-example.yaml")
}

resource "aws_s3_object" "uber_api" {
  bucket       = aws_s3_bucket.definitions.id
  key          = "uber/api.json"
  source       = "../definitions/uber/api.json"
  content_type = "application/json"
  etag         = filemd5("../definitions/uber/api.json")
}

resource "aws_s3_object" "account_service_api" {
  bucket       = aws_s3_bucket.definitions.id
  key          = "asyncapi/account-service.json"
  source       = "../definitions/asyncapi/account-service.json"
  content_type = "application/json"
  etag         = filemd5("../definitions/asyncapi/account-service.json")
}

resource "aws_s3_object" "streetlights_api" {
  bucket       = aws_s3_bucket.definitions.id
  key          = "asyncapi/streetlights.yaml"
  source       = "../definitions/asyncapi/streetlights.yaml"
  content_type = "application/json"
  etag         = filemd5("../definitions/asyncapi/streetlights.yaml")
}

resource "aws_s3_object" "xos_md" {
  bucket       = aws_s3_bucket.definitions.id
  key          = "delivery/xos.md"
  source       = "../definitions/delivery/xos.md"
  content_type = "application/json"
  etag         = filemd5("../definitions/delivery/xos.md")
}
