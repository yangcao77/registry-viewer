import type { FilterElem } from 'custom-types';
import {
  HomeGalleryFilterSourceRepo,
  HomeGalleryFilterTags,
  HomeGalleryFilterTypes
} from '@src/components';
import type { Dispatch, SetStateAction } from 'react';
import { Form, Text, TextContent, TextVariants } from '@patternfly/react-core';

export interface HomeGalleryFilterProps {
  tagFilterElems: FilterElem[];
  typeFilterElems: FilterElem[];
  sourceRepoFilterElems: FilterElem[];
  setTagFilterElems: Dispatch<SetStateAction<FilterElem[]>>;
  setTypeFilterElems: Dispatch<SetStateAction<FilterElem[]>>;
  setSourceRepoFilterElems: Dispatch<SetStateAction<FilterElem[]>>;
}

/**
 * Renders a {@link HomeGalleryFilter} React component.
 * Adds a type and tag filter for devfiles
 * @returns `<DevfileFilter tagsStateWithFreq={tagsStateWithFreq} typesStateWithFreq={typesStateWithFreq} setTagsStateWithFreq={setTagsStateWithFreq} setTypesStateWithFreq={setTypesStateWithFreq}/>`
 */
export const HomeGalleryFilter: React.FC<HomeGalleryFilterProps> = ({
  tagFilterElems,
  typeFilterElems,
  sourceRepoFilterElems,
  setTagFilterElems,
  setTypeFilterElems,
  setSourceRepoFilterElems
}: HomeGalleryFilterProps) => (
  <>
    <TextContent>
      <Text component={TextVariants.h2}>Filters</Text>
    </TextContent>
    <Form>
      {sourceRepoFilterElems.length > 1 && (
        <HomeGalleryFilterSourceRepo
          sourceRepoFilterElems={sourceRepoFilterElems}
          setSourceRepoFilterElems={setSourceRepoFilterElems}
        />
      )}
      {typeFilterElems.length > 1 && (
        <HomeGalleryFilterTypes
          typeFilterElems={typeFilterElems}
          setTypeFilterElems={setTypeFilterElems}
        />
      )}
      {tagFilterElems.length > 1 && (
        <HomeGalleryFilterTags
          tagFilterElems={tagFilterElems}
          setTagFilterElems={setTagFilterElems}
        />
      )}
    </Form>
  </>
);
HomeGalleryFilter.displayName = 'HomeGalleryFilter';
