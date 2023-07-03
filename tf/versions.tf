terraform {
  required_version = ">= 1.0"

  backend "gcs" {
    bucket = "terraform-personal"
    prefix = "api-docs"
  }
}
