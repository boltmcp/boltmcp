#!/usr/bin/env bash

print_version() {
  local tool=$1
  shift
  if command -v "$tool" &>/dev/null; then
    echo "### $tool"
    "$@" 2>/dev/null || echo "(version check failed)"
  else
    echo "### $tool"
    echo "Not installed"
  fi
  echo
}

echo "## CLI tool versions"
echo
print_version terraform terraform version
print_version kubectl kubectl version --client=true
print_version helm helm version --short
print_version gcloud gcloud --version
print_version aws aws --version
print_version eksctl eksctl version
print_version az az version

echo "## kubectl contexts"
echo
if command -v kubectl &>/dev/null; then
  kubectl config get-contexts
else
  echo "Not available"
fi
echo
echo "## ./keys directory"
echo
if [ -d ./keys ]; then
  shopt -s nullglob
  json_files=(./keys/*.json)
  shopt -u nullglob
  if [ ${#json_files[@]} -gt 0 ]; then
    printf '%s\n' "${json_files[@]}"
  else
    echo "(no JSON files)"
  fi
else
  echo "Not present"
fi
echo
echo "## Cloud credentials"
echo
# Each check requests a token (discarded) so expired or reauth-required
# sessions show up, not just missing ones. CLIs that aren't installed are skipped.
check_cred() {
  local label=$1 fix=$2
  shift 2
  if "$@" </dev/null &>/dev/null; then
    echo "- $label: authenticated"
  else
    echo "- $label: NOT VALID (run: $fix)"
  fi
}
found=0
if command -v gcloud &>/dev/null; then
  found=1
  check_cred "gcloud (kubectl, gcloud CLI)" "gcloud auth login" \
    gcloud auth print-access-token --quiet
  check_cred "gcloud application-default (Terraform)" "gcloud auth application-default login" \
    gcloud auth application-default print-access-token --quiet
fi
if command -v aws &>/dev/null; then
  found=1
  check_cred "aws" "aws login" aws sts get-caller-identity
fi
if command -v az &>/dev/null; then
  found=1
  check_cred "az" "az login" az account get-access-token
fi
if [ $found -eq 0 ]; then echo "(no cloud CLIs installed)"; fi
