package com.vetonomics.app.repository.search;

import com.vetonomics.app.domain.Region;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the Region entity.
 */
public interface RegionSearchRepository extends ElasticsearchRepository<Region, Long> {
}
