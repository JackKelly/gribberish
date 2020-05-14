use super::section::{Section, section_length};
use crate::utils::read_u16_from_bytes;

pub struct ProductDefinitionSection<'a> {
    data: &'a[u8],
}

impl Section for ProductDefinitionSection<'_> {
    fn data(&self) -> &[u8] {
        self.data
    }
}

impl<'a> ProductDefinitionSection<'a> {
    pub fn from_data(data: &[u8], offset: usize) -> ProductDefinitionSection {
        let len = section_length(data, offset);
        ProductDefinitionSection {
            data: &data[offset .. offset+len],
        }
    }

    pub fn coord_values_after_template(&self) -> u16 {
        read_u16_from_bytes(self.data, 5).unwrap_or(0)
    }

    pub fn product_definition_template_number(&self) -> u16 {
        read_u16_from_bytes(self.data, 7).unwrap_or(0)
    }
}