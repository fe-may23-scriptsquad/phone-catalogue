export function buildSortByParam(word: string, params: URLSearchParams) {
  switch (word) {
    case 'Cheapest': {
      params.set('sortBy', 'price');
      params.set('orderIn', 'ASC');
      break;
    }

    case 'Expensive': {
      params.set('sortBy', 'price');
      params.delete('orderIn');
      break;
    }

    case 'Oldest': {
      params.set('sortBy', 'year');
      params.set('orderIn', 'ASC');
      break;
    }

    case 'Alphabetically': {
      params.set('sortBy', 'name');
      params.delete('orderIn');
      break;
    }

    default: {
      params.set('sortBy', 'year');
      params.delete('orderIn');
    }
  }

  return params;
}
