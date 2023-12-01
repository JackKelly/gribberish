pub mod product_template;
pub mod tables;
pub mod horizontal_analysis_template;
pub mod derived_ensemble_horizontal_analysis_template;
pub mod average_accumulation_extreme_horizontal_analysis_template;
pub mod derived_ensemble_horizontal_forecast_time_interval_template;
mod parameters;

pub use horizontal_analysis_template::HorizontalAnalysisForecastTemplate;
pub use derived_ensemble_horizontal_analysis_template::DerivedEnsembleHorizontalAnalysisForecastTemplate;
pub use average_accumulation_extreme_horizontal_analysis_template::AverageAccumulationExtremeHorizontalAnalysisForecastTemplate;